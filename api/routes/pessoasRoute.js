const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)



module.exports = router