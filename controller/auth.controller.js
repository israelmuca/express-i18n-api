/*
* Here we would probably call the DB to confirm the user exists
* Then validate if they're authorized to login
* Then confirm their password
* Create a JWT or a cookie
* And finally send it back if all's good
*/
exports.login = (req, res) => {

    // If no validation errors, get the req.body objects that were validated and are needed
    const { email, password } = req.body

    // Here, we would make use of that data, validating it against our database, creating a JWT token, etc...

    // Since all the validations passed, we send the loginSuccessful message, which would normally include a JWT or some other form of authorization
    return res.status(200).send({ auth: true, message: req.polyglot.t('loginSuccessful'), token: null })
}


/*
* Here we would probably call the DB to confirm the user exists
* Then validate if they're authorized to login
* Create a JWT or a cookie
* Send an email to that address with the URL to login directly to change their password
* And finally let the user know their email is waiting for them at their inbox
*/
exports.forgotPassword = (req, res) => {

    // If no validation errors, get the req.body objects that were validated and are needed
    const { email } = req.body

    // Here, we would make use of that data, validating it against our database, creating a JWT token, etc...
    
    // Since all the validations passed, we send the emailSent message
    return res.status(200).send({ auth: true, message: req.polyglot.t('emailSent') })
}