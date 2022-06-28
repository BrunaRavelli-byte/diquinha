
const moment = require('moment')
const Diquinhas = require('../models/dicas')

const dicazinhas = ["Construa uma base sólida", "Tenha sua razão e lembre-se dela", "Encontre uma comunidade", "Divida os problemas em pequenos"];
const random_dicazinhas = dicazinhas[Math.floor(Math.random() * dicazinhas.length)]


module.exports = app => {
    app.get('/diquinhas', (req, res) => res.send({ dicazinhas: random_dicazinhas }));

    app.post('/diquinhas', (req, res) => { 
        
       const diquinhas = req.body
       Diquinhas.adiciona(diquinhas)
            res.send('POST Dicas')
    })
}

