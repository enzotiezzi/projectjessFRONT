import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resenha } from './resenha'
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ResenhaService {
    private URL = `${environment.url}/apis/resenha`;

    constructor(private http: Http) { }

    public criarResenha(resenha: Resenha): Observable<boolean> {
        const url = `${this.URL}/criar`;

        return this.http
            .post(url, resenha)
            .map(r => r.status >= 200 && r.status < 300)
            .catch(this.handleError);
    }

    public listarResenhas(): Observable<Resenha[]> {
        const url = `${this.URL}/listar`;

        return this.http
        .get(url)
        .map(r => r.json() as Resenha[])
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