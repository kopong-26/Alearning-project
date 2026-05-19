import NotesController from "#controllers/notes_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

router.group(()=>{
    router.get('/notes', [NotesController, 'getPublicNotes'])
    

    router.group(()=>{
        router.get('/notes/:id', [NotesController, 'getNoteById'])
        router.post('/notes', [NotesController, 'createNote'])
        router.delete('/notes/:id', [NotesController, 'deleteNote'])
        router.put('/notes/:id', [NotesController, 'editNote'])
    }).use(middleware.auth())
   
})