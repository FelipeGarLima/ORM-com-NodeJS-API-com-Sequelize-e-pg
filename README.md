ORM com NodeJS: API com Sequelize e postgres

comando para instalar o sequelize: 

    npm install sequelize sequelize-cli path
    npx sequelize-cli init
    npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
    npx sequelize-cli db:migrate
    npx sequelize-cli seed:generate --name demo-pessoa
    npx sequelize-cli db:seed:all

    npx sequelize-cli model:create --name Matriculas --attributes turno:string,matricula:integer
    npx sequelize-cli db:migrate:undo
    npx sequelize db:seed:undo
    npx sequelize-cli db:seed:undo --seed nome-do-arquivo
    npx sequelize-cli db:seed:undo:all