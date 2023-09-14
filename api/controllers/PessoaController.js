const database = require('../models')

class PessoaController {

    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        try {
            const { id } = req.params
            //const pessoa = await database.Pessoas.findAll({ where: { id: Number(id)}}) // retorna um vetor com um objeto
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id)}}) // retorna um objeto
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).send({message: error.message}) // completar tratamento
        }
    }

    static async criaPessoa(req, res){
        try {
            await database.Pessoas.create(req.body)
            res.status(200).send({message: "Cadrastado com sucesso!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async 
}

module.exports = PessoaController