const express = require('express');
const app = express();
const cors = require('cors');
const serv = require('./service/grafoService');
//const res = require('express/lib/response');

//yarn dev

app.use(express.json());
app.use(cors());

const service = new serv();

app.get('/teste', (req, res) => {
    return res.json({ "status": "OK" });
});

app.post('/teste', (req, res) => {
    return res.json(service.teste(req));
});

app.post('/get-route', (req, res) => {
    return res.json(service.getRoute(req));
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