const mysql = require('mysql');
const environment = "development";
const config = require("./config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, // O host do banco. Ex: localhost
    user: config.database.user, // Um usuário do banco. Ex: user 
    password: config.database.password, // A senha do usuário. Ex: user123
    database: config.database.database // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

// verificando se houve erro
con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Connection Realizada!')
})


// inserindo dados
const estoque = {descricao: 'CAFE', valor: 2, fornecedor: 'SAO BRAZ LTDA'}
con.query('INSERT INTO PRODUTO SET ? ', estoque, (err,rows) => {
    if(err) throw err
    console.log("Registro incluído com sucesso!!");
})


// atualizando dados
con.query('UPDATE PRODUTO SET descricao = ? where ID = ? ', ['CAFE EXPRESSO','1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso!!");
})


// deletando registro
con.query('DELETE FROM PRODUTO where ID = ? ', ['1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Excluido com sucesso");
})

// encerrando conexão
con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão...', err)
        return 
    }
    console.log('Conexão encerrada...')
})