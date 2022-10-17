class Vertice {
    constructor() {
        this.visitado = 0;
        this.lista_adj = []
    }

    setVisitado(visitado) {
        this.visitado = visitado;
    }

    getVisitado() {
        return this.visitado;
    }

    getListaAdj() {
        return this.lista_adj;
    }

    addAresta(valor) {
        this.lista_adj.push(valor);
    }

    getTamanhoLista(){
        return this.lista_adj.length;
    }
}

module.exports = Vertice;