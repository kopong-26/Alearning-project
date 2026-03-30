// import type { HttpContext } from '@adonisjs/core/http'

import { NoteService } from "#services/note_service";
import { inject } from '@adonisjs/core'

@inject()
export default class NotesController {
    // private noteService: NoteService = new NoteService()
    constructor(private noteService: NoteService) {}
    async getPublicNotes(){
        return this.noteService.getPublicNotes()
    }
}