const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
    .get('/niveis', NivelController.pegaTodosNiveis)
    .get('/niveis/:id', NivelController.pagaUmNivel)

    .post('/niveis', NivelController.criarNivel)
    .post('/niveis/:id/restaura', NivelController.restauraNivel)

    .put('/niveis/:id', NivelController.atualizarNivel)
    
    .delete('/niveis/:id', NivelController.deletarNivel)

module.exports = router