const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
    .get('/turmas', TurmaController.pegaTodasTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)

    .post('/turmas', TurmaController.criarTurma)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)

    .put('/turmas/:id', TurmaController.atualizarTurma)
    
    .delete('/turmas/:id', TurmaController.deletarTurma)

module.exports = router