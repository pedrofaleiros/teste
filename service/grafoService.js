const Grafo = require('../grafo');

class GrafoService {

    constructor() {
    }

    teste(req) {
        return { "status": "OK", 'req': req.body };
    }

    getRoute(req) {
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

            return {"route":route};

        } else {
            return { "status": "erro" };
        }
    }

}

module.exports = GrafoService;