const Diquinhas = require('../models/dicas')

module.exports = app => {
    app.get('/diquinhas', (req, res) => res.send('Você está na rota diquinhas, e está realizando um GET'))

    app.post('/diquinhas', (req, res) => { 
        
       const diquinhas = req.body
       Diquinhas.adiciona(diquinhas)
            res.send('POST Dicas')
    })
}

