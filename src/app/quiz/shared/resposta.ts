export class Resposta {
    _id: string;
    idQuiz: string;
    idItemQuiz: string;
    resposta: string;
    identificacao: string;

    constructor(){
        this._id = "";
        this.idQuiz = "";
        this.idItemQuiz = "";
        this.resposta = "";
    }
}