const express = require('express');
const Grafo = require('./grafo');
const app = express();
//yarn dev
app.use(express.json()); // faz com que o express entenda JSON

var grafo = null;

app.get('/getgrafo', (req, res) => {

    if(grafo == null){
        res.status(404);
        return res.json({"Erro":"Grafo nulo"})
    }

    return res.json(grafo);
});

app.get('/teste', (req, res) => {
    return res.json({"status":"OK"});
})

app.get('/route', (req, res) => {

    if(grafo == null){
        res.status(404);
        return res.json({"Erro":"Grafo nulo"})
    }

    return res.json(grafo.getRoute(0));
})

app.post('/loadgrafo', (req, res) => {
    const { name } = req.body;

    const num_v = req.body.vertices;
    const arestas = req.body.arestas;

    var g = new Grafo(num_v);

    for (let i = 0; i < arestas.length; i++) {
        let x = arestas[i][0]
        let y = arestas[i][1]
        g.addAresta(x, y)
        g.addAresta(y, x)
    }

    grafo = g;

    return res.json(grafo); // retorna a informação da variável users
});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});