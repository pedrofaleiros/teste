var Vertice = require("./vertice.js");

class Grafo {

    constructor(num_v) {
        this.numero_vertices = num_v;
        this.vertices = [];

        for (let i = 0; i < num_v; i++) {
            this.vertices.push(new Vertice());
        }
    }

    addAresta(x, y) {
        this.vertices[x].addAresta(y);
    }

    zeraVisitados() {
        for (let i = 0; i < this.numero_vertices; i++) {
            this.vertices[i].setVisitado(0);
        }
    }

    mostraGrafo() {
        for (let i = 0; i < this.numero_vertices; i++) {
            console.log(`${i} -> ${this.vertices[i].getListaAdj()}`);
        }
    }

    dfs(pos) {
        this.vertices[pos].visitado = 1;
        console.log(pos);

        for(let i = 0; i < this.vertices[pos].getTamanhoLista(); i++){
            let elemento = this.vertices[pos].getListaAdj()[i];
            if(this.vertices[elemento].getVisitado() == 0){
                this.dfs(elemento);
            }
        }
    }

    teste(){
        return 'Funcao Grafo';
    }
}

module.exports = Grafo;