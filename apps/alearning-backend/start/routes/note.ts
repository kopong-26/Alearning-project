import NotesController from "#controllers/notes_controller";
import router from "@adonisjs/core/services/router";

router.group(()=>{
    router.get('/notes', [NotesController, 'getPublicNotes'])
    router.post('/notes', [NotesController, 'createNote'])
})