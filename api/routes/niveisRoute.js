const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosNiveis)
router.get('/niveis/:id', NivelController.pagaUmNivel)
router.post('/niveis', NivelController.criarNivel)
router.put('/niveis/:id', NivelController.atualizarNivel)
router.delete('/niveis/:id', NivelController.deletarNivel)

module.exports = router