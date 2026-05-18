import type { HttpContext } from '@adonisjs/core/http'

// import { NoteService } from "#services/note_service";
// import { inject } from '@adonisjs/core'
import Note from '#models/note';
import Tag from '#models/tag';
import { NoteFormBody } from '@alearning/types';
import db from '@adonisjs/lucid/services/db';

// @inject()
export default class NotesController {
    // private noteService: NoteService = new NoteService()
    // constructor(private noteService: NoteService) {}

    async getPublicNotes(){
        return await Note.query().where('visibility', 'public').where('isShadow', false).preload('topics')
    }

    async getNoteById({params}:HttpContext){
        const noteId = params.id
        return await Note.query().where('id',noteId).preload('topics').first()
    }

    async createNote({request, response}:HttpContext){
        const noteBody = request.body() 
    
        const newNote = await db.transaction(async (trx)=>{
            const newNote = new Note()
            
            newNote.title = noteBody.title
            newNote.slug = noteBody.title + crypto.randomUUID()
            newNote.visibility = noteBody.visibility
            newNote.owner = 1
            newNote.isShadow = false
            newNote.description = noteBody.description
            newNote.contentRaw = noteBody.contentRaw
            newNote.contentHtml = "contentHtml \n" + noteBody.contentRaw
            
            // ผูก model instance เข้ากับ transcation
            newNote.useTransaction(trx)
            await newNote.save()

            // หรือ ผูก model instance เข้ากับ transcation ทันที ด้วย { client: trx }
            for(let tag of noteBody.topic_id){
                await Tag.create({
                    noteId: newNote.id,
                    topicId: tag
                }, { client: trx })
            }
           
            return newNote

        })

        return response.created(newNote)
    }

    async deleteNote({params}:HttpContext){
        const noteId = params.id

        const delNote = await Note.query().where('id', noteId).first()
        await delNote?.delete()
        
        return delNote
    }

    async editNote({params, request}:HttpContext){
        const noteBody = request.body()
        const noteId = params.id

        const editedNote = await db.transaction(async (trx)=>{

            let note = await Note.query().where('id',noteId).first()
            
            if(note){
                note!.title = noteBody.title
                note!.slug = noteBody.title + crypto.randomUUID()
                note!.visibility = noteBody.visibility
                note!.isShadow = false
                note!.description = noteBody.description
                note!.contentRaw = noteBody.contentRaw
                note!.contentHtml = "contentHtml \n" + noteBody.contentRaw

                note?.useTransaction(trx)
                await note?.save()

                const tags = await Tag.query().where('note_id', noteId)
                tags.forEach(async(tag)=> {
                    tag.useTransaction(trx)
                    await tag.delete()
                })
                
                for(let tag of noteBody.topic_id){
                        await Tag.create({
                            noteId: note.id,
                            topicId: tag
                        }, { client: trx })
                }

                return note               
            }
        })

        return editedNote
    }


}