class Tabelas{
    init(conexao){
        this.conexao = conexao
        console.log("Tabelas foram chamadas");
        this.criarDicas()
    }
    criarDicas(){
        const sql = 'CREATE TABLE IF NOT EXISTS diquinhas (id int NOT NULL AUTO_INCREMENT, Dicas varchar (50) NOT NULL,  PRIMARY KEY(id))'
        this.conexao.query(sql, error => {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela diquinhas criada com sucesso");
            }
        })
        }
    }


module.exports = new Tabelas