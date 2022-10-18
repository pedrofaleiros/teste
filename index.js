const express = require('express');
const Grafo = require('./grafo');
const server = express();
//yarn dev
server.use(express.json()); // faz com que o express entenda JSON

var grafo = null;

server.get('/getgrafo', (req, res) => {
    return res.json(grafo);
});

server.post('/loadgrafo', (req, res) => {
    const { name } = req.body;

    const num_v = req.body.vertices;
    const arestas = req.body.arestas;

    var g = new Grafo(num_v);

    for(let i = 0; i < arestas.length; i++){
        let x = arestas[i][0]
        let y = arestas[i][1]
        g.addAresta(x, y)
        g.addAresta(y, x)
    }

    grafo = g;

    return res.json(grafo); // retorna a informação da variável users
});

server.listen(3000);