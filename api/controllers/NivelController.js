const database = require('../models')

class NivelController{

    static async pegaTodosNiveis(req, res){
        try {
            return res.status(200).json(await database.Niveis.findAll())
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async pagaUmNivel(req, res){
        try {
            return res.status(200).send(await database.Niveis.findOne({where: {id: Number(req.params.id)}}))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarNivel(req, res){
        try {
            await database.Niveis.create(req.body, {where: {id: Number(req.params.id)}})
            return res.status(200).send({message: "Cadrastada com sucesso!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarNivel(req, res){
        try {
            await database.Niveis.update(req.body, { where: { id: Number(req.params.id) } })
            return res.status(200).send(await database.Niveis.findOne({where: {id: Number(req.params.id)}}))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarNivel(req, res){
        try {
            await database.Niveis.destroy({where: {id: Number(req.params.id)}})
            return res.status(200).send({message: "Nivel deletado!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController