var Grafo = require("./grafo.js")

var grafo = new Grafo(5);

const arestas = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
];

for(let i = 0; i < arestas.length; i++){
    let x = arestas[i][0]
    let y = arestas[i][1]
    grafo.addAresta(x, y)
    grafo.addAresta(y, x)
}

grafo.mostraGrafo();

grafo.dfs(0);
