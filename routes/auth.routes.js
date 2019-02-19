import { validator } from '../validator/auth.validator'
import { login,
        forgotPassword } from '../controller/auth.controller'

// Routes =============================================================
module.exports = router => {

    // POST route to mock a login  endpoint
    router.post("/api/login", validator('login'), login)

    // POST route to mock a forgotten password endpoint
    router.post("/api/forgot-password", validator('forgotPassword'), forgotPassword)

}