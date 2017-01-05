import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from './shared/Quiz';
import { QuizService } from './shared/quiz.service';
import { Resposta } from './shared/resposta';

@Component({
    selector: 'quiz-responder',
    templateUrl: './quiz-responder.component.html',
    providers: [QuizService]
})
export class QuizResponderComponent implements OnInit {

    quiz: Quiz = new Quiz();
    respostas: Resposta[] = [];
    identificacao: string = "";

    constructor(private activatedRoute: ActivatedRoute,
        private quizService: QuizService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];

            this.quizService
                .buscarQuiz(id)
                .subscribe(q => {
                    this.quiz = q;

                    for (let i = 0; i < this.quiz.itensQuiz.length; i++) {
                        let itemQuiz = this.quiz.itensQuiz[i];

                        let resposta = new Resposta();
                        resposta.idQuiz = itemQuiz.idQuiz;
                        resposta.idItemQuiz = itemQuiz._id;

                        this.respostas.push(resposta);
                    }
                });
        });
    }

    public responderQuiz(): void {

        if(this.identificacao.length == 0)
            alert("Digite seu insta ou E-mail");
        else{
            if(confirm("Tem certeza?")){
                this.respostas.forEach(element => {
                element.identificacao = this.identificacao;
            });

            this.quizService
                .responderQuiz(this.respostas)
                .subscribe(b =>{
                    if(b)
                        alert("Quiz respondido");
                });                    
            } 
        }
    }
}