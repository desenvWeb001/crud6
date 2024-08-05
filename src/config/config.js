// configurações de dependencias e conexão com banco de dados

module.exports = {
    development : {
            database : {
            host: 'localhost', // O host do banco. Ex: localhost
            port: '3306', // Porta a ser utilizada para conexão com o banco
            user: 'root', // Um usuário do banco.  
            password: '', // A senha do usuário. 
            database: 'estoque' // Nome da base de dados que vai ser utilizada
        }
    }

};