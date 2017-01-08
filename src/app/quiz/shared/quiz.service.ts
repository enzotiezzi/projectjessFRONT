import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import { Quiz } from './quiz';
import { Resposta } from './resposta';
import { Questionario } from '../../questionario/shared/questionario';

@Injectable()
export class QuizService {

    private URL: string = `${environment.url}/apis/quiz`;
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    public criarQuiz(quiz: Quiz): Observable<boolean> {
        const url = `${this.URL}/criar`;
        return this.http
            .post(url, quiz)
            .map(r => r.status >= 200 && r.status < 300)
            .catch(this.handleError);
    }

    public buscarQuiz(id: string): Observable<Quiz> {
        const url = `${this.URL}/quiz/${id}`;

        return this.http
            .get(url)
            .map(r => r.json() as Quiz)
            .catch(this.handleError);
    }

    public responderQuiz(respostas: Resposta[]): Observable<boolean> {
        const url = `${this.URL}/responder`;

        return this.http
            .post(url, { respostas: respostas }, { headers: this.headers })
            .map(r => r.status >= 200 && r.status < 300)
            .catch(this.handleError);
    }

    public buscarParticipantes(id: string): Observable<string[]> {
        const url = `${this.URL}/participantes/${id}`;

        console.log(url);

        return this.http
            .get(url)
            .map(r => r.json() as string[])
            .catch(this.handleError);
    }

    public buscarQuestionario(id: string): Observable<Questionario[]> {
        const url = `${this.URL}/respostas/${id}`;

        return this.http
            .get(url)
            .map(r => r.json() as Questionario[])
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}