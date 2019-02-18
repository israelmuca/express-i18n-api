// Import dependencies
// =============================================================
import express from 'express'
import createLocaleMiddleware from 'express-locale'
import bodyParser from 'body-parser'


// Setup the express router
// =============================================================
const router = express()

// Get the user's locale, and set a default in case there's none
router.use(createLocaleMiddleware({
    "priority": ["accept-language", "default"],
    "default": "en_US"
}))

// Add data parsing to express
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())


// Start the server!
// =============================================================
router.listen(8080, () => {
    console.log(`App running on port 8080`) 
})