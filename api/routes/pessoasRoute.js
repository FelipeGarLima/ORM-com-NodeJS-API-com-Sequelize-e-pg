const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
    .get('/pessoas/:id/consultaRegistroApagado', PessoaController.consultaRegistroApagado)
    //.get('/pessoas/consultaTodosRegistroApagado', PessoaController.consultaTodosRegistroApagado)

    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)

    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)
    .delete('/pessoas/deletarPessoaPermanentemente/:id', PessoaController.deletarPessoaPermanentemente)



module.exports = router