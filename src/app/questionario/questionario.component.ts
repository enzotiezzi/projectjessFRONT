import { Component, OnInit } from '@angular/core';
import { Questionario } from './shared/questionario';
import { QuizService } from '../quiz/shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionarioMap } from './shared/questionario-map.interface';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: [QuizService]
})

export class QuestionarioComponent implements OnInit {

  participantes: string[] = [];
  questionarios: QuestionarioMap[] = [];

  constructor(private quizService: QuizService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      let id = params['id'];

      this.quizService
        .buscarParticipantes(id)
        .subscribe(p => {
          this.participantes = p;

          this.participantes.forEach(element => {
            this.questionarios[element] = [];
          });
        });
    });
  }

  public buscarQuestionario(args: any[]): void {
    let aberto = args[0] as boolean;
    let id = args[1] as string;

    if (aberto) {
      this.quizService
        .buscarQuestionario(id)
        .subscribe(q => {
          console.log(q);
          this.questionarios[id] = q;
        });
    }
  }
}
