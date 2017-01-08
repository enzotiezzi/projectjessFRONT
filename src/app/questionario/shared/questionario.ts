import { ItemQuiz } from '../../quiz/shared/itemQuiz';

export class Questionario {
    _id: string;
    identificacao: string;
    idQuiz: string;
    idItemQuiz: ItemQuiz;
    resposta: string;
}