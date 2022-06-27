const custom_express = require('./config/custom_express')

const app = custom_express()

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));

