const express = require('express');
const Grafo = require('./grafo');
const server = express();
server.use(express.json()); // faz com que o express entenda JSON
const users = [];

server.get('/users', (req, res) => {
    return res.json(users);
});

server.post('/users', (req, res) => {
    const { name } = req.body;

    const num_v = req.body.vertices;
    const arestas = req.body.arestas;
    console.log(arestas.length);
    var grafo = new Grafo(num_v);

    for(let i = 0; i < arestas.length; i++){
        let x = arestas[i][0]
        let y = arestas[i][1]
        grafo.addAresta(x, y)
        grafo.addAresta(y, x)
    }

    grafo.mostraGrafo();


    return res.json(users); // retorna a informação da variável users
});

server.listen(3000);