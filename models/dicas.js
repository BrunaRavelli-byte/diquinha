const conexao = require('../infraestrutura/conexao')

class Diquinhas{
    adiciona(diquinhas){
        const sql = 'INSERT INTO Diquinhas SET ?'
        conexao.query(sql, diquinhas, (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                console.log(resultado);
            }
        })
    }
}

module.exports = new Diquinhas 