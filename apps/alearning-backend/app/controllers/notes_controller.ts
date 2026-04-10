import type { HttpContext } from '@adonisjs/core/http'

import { NoteService } from "#services/note_service";
import { inject } from '@adonisjs/core'
import Note from '#models/note';
import Tag from '#models/tag';
import { NoteFormBody } from '@alearning/types';
import db from '@adonisjs/lucid/services/db';

@inject()
export default class NotesController {
    // private noteService: NoteService = new NoteService()
    constructor(private noteService: NoteService) {}

    async getPublicNotes(){
        return this.noteService.getPublicNotes()
    }

    async createNote({request}:HttpContext){
        const noteBody = request.body() as NoteFormBody
    
        const newNote = await db.transaction(async (trx)=>{
            const newNote = new Note()
            newNote.title = noteBody.title
            newNote.slug = noteBody.title + crypto.randomUUID()
            newNote.visibility = noteBody.visibility
            newNote.owner = 1
            newNote.isShadow = false
            newNote.description = noteBody.description
            newNote.contentRaw = noteBody.contentRaw
            newNote.contentHtml = "test"
            
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

        return newNote
    }

    async deleteNote({params}:HttpContext){
        const noteId = params.id

        const delNote = await Note.query().where('id', noteId).first()
        await delNote?.delete()
        
        return delNote
    }
}