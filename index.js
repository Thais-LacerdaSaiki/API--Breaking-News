const express = require("express");
const userRoute = require('./src/routes/user.route')

const app = express();

app.use('/soma', userRoute);
app.listen(3000);


//ROTA
    // METHOD HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    //método http é a forma como a internet se comunica entre cliente e servidor = req e res : requisição e resposta. O MÉTODO QUE ESTA SENDO UTILIZADO É O app que vem do "express" ponto.get (get é uma função)
    // GET - PEGA UMA INFO (LEITURA - READ)
    // POST - CRIA UMA INFO (CRIAÇÃO - CREATE)
    // PUT - ALTERA TOSA A INFO (ATUALIZAÇÃO - UPDATE)
    // PATH - ALTERA PARTE DA INFO (ATUALIZAÇÃO - UPDATE)
    // DELETE - APAGA UMA INFO (DELETAR - DELETE)

// NOME - Um identificador da rota

// FUNCTION (CALLBACK) - é a  (=> arrow function - função anonima que recebe os parametros req e res) Responsável por executar um comando ela recebe a requisição e retorna uma resposta , nem sempre tem algum valor, pode até ter uma valor dentro do parametro ou dentro da rota.
// Ela é executada por trás de outra função por isso recebe o nome de CALLBACK

/*app.get("/soma", (req, res) => {
    const soma = 100 + 1;
    res.send({soma: soma}) 
}); */

