const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('./turmasRouter')
const niveis = require('./niveisRoute')

module.exports = app => {

    app.get('/', (req, res) => res.send({mensagem: 'Boas-vindas à API'}))

    app.use(
        bodyParser.json(),
        pessoas,
        turmas,
        niveis
    )

}