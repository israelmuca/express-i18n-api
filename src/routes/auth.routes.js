import { validator } from '../validator/auth.validator'
import { procErr } from '../utilities/processErrors'
import { login,
        forgotPassword } from '../controller/auth.controller'

// Routes =============================================================
module.exports = router => {

    // POST route to mock a login  endpoint
    router.post("/api/login", validator('login'), procErr, login)

    // POST route to mock a forgotten password endpoint
    router.post("/api/forgot-password", validator('forgotPassword'), procErr, forgotPassword)

}