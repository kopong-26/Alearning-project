import AuthController from "#controllers/auth_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

router.post('/login', [AuthController, 'login'])

router.group(()=>{
    router.post('/refresh', [AuthController, 'refresh'])
    router.post('/logout', [AuthController, 'logout'])
}).use(middleware.auth())