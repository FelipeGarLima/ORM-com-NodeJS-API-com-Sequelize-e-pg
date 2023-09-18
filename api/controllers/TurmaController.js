const database = require('../models')

class TurmaController{

    static async pegaTodasTurmas(req, res){
        try {
            return res.status(200).json(await database.Turmas.findAll())
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController