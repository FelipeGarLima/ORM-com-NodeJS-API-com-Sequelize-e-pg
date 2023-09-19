const { where } = require('sequelize')
const database = require('../models')

class PessoaController {

    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).send(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        try {
            const { id } = req.params
            //const pessoa = await database.Pessoas.findAll({ where: { id: Number(id)}}) // retorna um vetor com um objeto
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id)}}) // retorna um objeto
            return res.status(200).send(pessoa)
        } catch (error) {
            return res.status(500).send({message: error.message}) // completar tratamento
        }
    }

    static async criaPessoa(req, res){
        try {
            await database.Pessoas.create(req.body)
            return res.status(200).send({message: "Cadrastado com sucesso!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res){
        try {
            //const { id } = req.params
            //const novaInfos = req.body
            await database.Pessoas.update(req.body, { where: { id: Number(req.params.id) } })

            return res.status(200).send(await database.Pessoas.findOne({where: {id: Number(req.params.id)}}))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarPessoa(req, res){
        try {
            //const {id} = req.params
            await database.Pessoas.destroy({where: {id: Number(req.params.id)}})
            return res.status(200).send({message: "Pessoa deletada!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async pegaUmaMatricula(req, res){
        try {
            const { estudanteId, matriculaId } = req.params
            const matricula = await database.Matriculas.findOne({ 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId) 
                }
            }) 
            return res.status(200).send(matricula)
        } catch (error) {
            return res.status(500).send({message: error.message}) // completar tratamento
        }
    }

    static async criaMatricula(req, res){
        try {
            const { estudanteId } = req.params
            const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            res.status(200).send(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res){
        try {
            const { estudanteId, matriculaId } = req.params

            await database.Matriculas.update(req.body, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })

            return res.status(200).send(await database.Matriculas.findOne({where: {id: Number(matriculaId)}}))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarMatricula(req, res){
        try {
            const { estudanteId, matriculaId } = req.params
            await database.Matriculas.destroy({where: { id: Number(matriculaId), estudante_id: Number(estudanteId) }})
            return res.status(200).send({message: "Matricula deletada!"})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController