const custom_express = require('./config/custom_express')

const conexao = require('./infraestrutura/conexao')

const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(error => {
    if (error) {
        console.log(error);
    }  {
        Tabelas.init(conexao)
        const app = custom_express()

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
        console.log('Conectado com sucesso');
    }
})


