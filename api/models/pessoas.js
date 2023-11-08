'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      }) // relação de um pra muitos
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      })
    }
  }
  Pessoas.init(
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Configuração para autoincremento
    },
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error('nome deve ter mais de 3 caracteres!')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'e-mail inválido!'
        }
      }
    },
    role: DataTypes.STRING
    }, {
      sequelize,
      paranoid: true,
      modelName: 'Pessoas',
      defaultScope: {
        where: { ativo: true }
      },
      scopes: {
        todos: { where: {}}
        // etc: { constraint: valor }
      }
    }
  );
  return Pessoas;
};