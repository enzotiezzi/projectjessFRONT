import { ItemQuiz } from './itemQuiz';

export class Quiz{
    nomeQuiz: string;
    itensQuiz: ItemQuiz[];
    dataQuiz: string;

    constructor(){
        this.nomeQuiz = "";
        this.itensQuiz = [];
        this.dataQuiz = "";
    }
}