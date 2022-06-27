

module.exports = app => {
    app.get('/diquinhas', (req, res) => res.send('Você está na rota diquinhas, e está realizando um GET'))

    app.post('/diquinhas', (req, res) => { 
        
        console.log(req.body)
            res.send('Você está na rota diquinhas, e está realizando um POST')
    })
}