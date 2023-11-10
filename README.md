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

    npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
    npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
    npx sequelize-cli model:create --name Matriculas --attributes status:string
    npx sequelize-cli db:migrate
    npx sequelize-cli seed:generate --name demo-nivel
    npx sequelize-cli seed:generate --name demo-turmas
    npx sequelize-cli seed:generate --name demo-matriculas

    npx sequelize-cli db:seed:undo:all
    npx sequelize-cli db:migrate:undo:all
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

    npm outdated => para verificar pacotes desatualizados
    npm update => para atualizar pacotes


    Recebemos uma lista de funcionalidades que o cliente deseja implementar, agora que o CRUD básico foi feito e o sistema está funcionando.
    Requisitos do projeto:

        - [OK] O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados;

        - [OK] Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos;

        - [OK]Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front;

        - [OK] É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida;

        - O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas);

        - O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas;

        - O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”;

        - Durante o projeto vamos analisar esta lista e transformar esses requisitos em novas funcionalidades.

    npx sequelize-cli db:migrate