import { ItemQuiz } from './itemQuiz';

export class Quiz{
    _id: string;
    nomeQuiz: string;
    itensQuiz: ItemQuiz[];
    dataQuiz: string;

    constructor(){
        this._id = "";
        this.nomeQuiz = "";
        this.itensQuiz = [];
        this.dataQuiz = "";
    }
}