// Import dependencies
// =============================================================
import express from 'express'
import createLocaleMiddleware from 'express-locale'
import bodyParser from 'body-parser'


// Setup the express router
// =============================================================
const router = express()

// Add data parsing to express
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// Get the user's locale, and set a default in case there's none
router.use(createLocaleMiddleware({
    "priority": ["accept-language", "default"],
    "default": "en_US"
}))

// Start polyglot and set the language in the req with the phrases to be used
router.use(startPolyglot)

// Routes
// =============================================================
require("./routes/test.routes")(router)

// Start the server!
// =============================================================
router.listen(8080, () => {
    console.log(`App running on port 8080`) 
})