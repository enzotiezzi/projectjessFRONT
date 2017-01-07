export class Resenha {
    _id: string;
    titulo: string;
    autor: string;
    editora: string;
    quantidadePaginas: string;
    resenha: string;
    linkImagem: string;
    nota: number;

    constructor(){
        this.titulo = "";
        this.autor = "";
        this.editora = "";
        this.quantidadePaginas = "";
        this.resenha = "";
        this.linkImagem = "";
        this.nota = 0;
    }
}