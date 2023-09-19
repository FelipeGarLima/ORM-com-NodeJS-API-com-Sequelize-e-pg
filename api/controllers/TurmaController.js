const database = require('../models')

class TurmaController{

    static async pegaTodasTurmas(req, res){
        try {
            return res.status(200).json(await database.Turmas.findAll())
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res){
        try {
            return res.status(200).send(await database.Turmas.findOne({ where: { id: Number(req.params.id) } }))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarTurma(req,res){
        try {
            await database.Turmas.create(req.body)
            return res.status(200).send({message: "Cadrastada com sucesso!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarTurma(req, res){
        try {
            await database.Turmas.update(req.body, {where: {id: Number(req.params.id)}})
            return res.status(200).send(await database.Turmas.findOne({where: {id: Number(req.params.id)}}))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarTurma(req, res){
        try {
            await database.Turmas.destroy({where: {id: Number(req.params.id)}})
            return res.status(200).send({message: "Turma deletada!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmaController