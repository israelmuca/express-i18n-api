import chai from 'chai'
import chaiHttp from 'chai-http'
import { messages } from '../i18n/i18n'

chai.use(chaiHttp)

const expect = chai.expect
const url = 'http://localhost:8080'

// Test translations
describe('Translations: ', () => {

    it("should pass if the 'es' and 'en' objects have the same keys", done => {
        expect(Object.keys(messages.es)).to.have.all.members(Object.keys(messages.en))
        done()
    })

    it("should pass if a Spanish message is returned when es_MX headers are sent", done => {
        chai.request(url)
            .post('/api/login')
            .set('Accept-Language', 'es_MX')
            .send({
                "email": "test@email.com",
                "password": "a1b2c3"
            })
            .end((err, res) => {
                expect(res.body.message).to.be.equal("Has iniciado sesión exitosamente.")
                done()
            })
    })

    it("should pass if an English message is returned when en_US headers are sent", done => {
        chai.request(url)
            .post('/api/login')
            .set('Accept-Language', 'en_US')
            .send({
                "email": "test@email.com",
                "password": "a1b2c3"
            })
            .end((err, res) => {
                expect(res.body.message).to.be.equal("You've successfully logged in.")
                done()
            })
    })
})