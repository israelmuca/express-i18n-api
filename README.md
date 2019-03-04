# Express i18n API

**Validate incoming data, and respond in the user's language**

While there are libraries that help us both translate messages, and validate data in an Express' server, doing both can be a bit tricky.

I created this example based on a project I recently did for an API which had to be fully translated to both English and Spanish.

## Features
- Checks the header, accepting either _es_MX_ or _en_US_ (which is also the default)
- Validates both the existence of the expected fields, and the validity of the data being sent to the API
- Returns either error or success messages in the user's defined language (Spanish or English at this moment)

## Prerequisites
- [Postman](https://www.getpostman.com/) or similar software

## Getting started

### Test API without installing anything:
---
> **Live API:**
>
>https://express-i18n-api.herokuapp.com/
>
> Express listens on `/api/login` and `/api/forgot-password`  
> login expects `email` and `password`; forgot-password only an `email`  
> Remember to set your headers to _es_MX_ to see it in action in Spanish
---

### Run the code locally
Clone the repo, then install dependencies:
```shell
git clone https://github.com/israelmuca/express-i18n-api.git myproject
cd myproject
npm i
```

Run the API:
```shell
npm run start
```

The console should read:
```shell
App running on port 8080
```

While the API is running, you can also run tests with:
```shell
npm run test
```

Or, you can jump straight into Postman:

### Test with Postman
- Set the _Method_ to **POST**
- Set the _Request URL_ to **localhost:8080/api/login** or **localhost:8080/api/forgot-password**
- Set the _Headers_ key to **Accept-Language** and the value to **es_MX** or **en_US**

The `login` endpoint requires `email` and `password`. The only validation that is done is that both fields exists, and the email is a valid email address _(test@email.com)_.
The `forgot-password` endpoint requires `email`. It only validates the email is valid.


## Built with
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com)
- [Express-validator](https://express-validator.github.io/docs/)
- [Polyglot.js](https://airbnb.io/polyglot.js/)
- ❤️

## Hosted in
- [Heroku](https://heroku.com)
