const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)

module.exports = router