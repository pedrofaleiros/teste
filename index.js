const express = require('express');
const Grafo = require('./grafo');
const app = express();
const cors = require('cors')
//yarn dev
app.use(express.json());
app.use(cors());

app.get('/teste', (req, res) => {
    return res.json({ "status": "OK" });
});

app.post('/teste', (req, res) => {
    console.log(req.body);
    return res.json({ "status": "OK", 'response': req.body });
});

app.post('/route', (req, res) => {

    if (req.body.vertices && req.body.arestas) {
        const num_v = req.body.vertices;
        const arestas = req.body.arestas;

        var g = new Grafo(num_v);

        for (let i = 0; i < arestas.length; i++) {
            let x = arestas[i][0];
            let y = arestas[i][1];
            g.addAresta(x, y);
            g.addAresta(y, x);
        }

        const route = g.getRoute(0);

        return res.json(route);

    } else {
        return res.json({ "status": "erro" });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

/* 
{
  "vertices":5,
  "arestas":[
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4]
    ]
} 
*/