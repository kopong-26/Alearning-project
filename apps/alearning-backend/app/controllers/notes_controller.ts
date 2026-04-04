import type { HttpContext } from '@adonisjs/core/http'

import { NoteService } from "#services/note_service";
import { inject } from '@adonisjs/core'
import Note from '#models/note';
import Tag from '#models/tag';
import { NoteFormBody } from '@alearning/types';

@inject()
export default class NotesController {
    // private noteService: NoteService = new NoteService()
    constructor(private noteService: NoteService) {}

    async getPublicNotes(){
        return this.noteService.getPublicNotes()
    }

    async createNote({request}:HttpContext){
        const noteBody = request.body() as NoteFormBody
        const newNote = await Note.create({
            title: noteBody.title,
            slug: noteBody.title + crypto.randomUUID(),
            visibility: noteBody.visibility,
            owner: 1,
            isShadow: false,
            description: noteBody.description,
            contentRaw: noteBody.contentRaw,
            contentHtml: "test",
        })

        for(let tag of noteBody.topic_id){
            const addTag = await Tag.create({
                noteId: newNote.id,
                topicId: tag
            })
        }
        
        return newNote
    }
}