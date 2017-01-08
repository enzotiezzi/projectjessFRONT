import { Questionario } from './questionario';

export interface QuestionarioMap{
    [identificacao: string] : Questionario[];
}