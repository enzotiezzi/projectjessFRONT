import { Component, OnInit } from '@angular/core';
import { Quiz } from './shared/quiz';
import { ItemQuiz } from './shared/itemQuiz';
import { QuizService } from './shared/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})

export class QuizComponent implements OnInit {

  quiz: Quiz = new Quiz();

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.adicionarPergunta();
  }

  public adicionarPergunta(): void {
    this.quiz.itensQuiz.push(new ItemQuiz());
  }

  public deletarPerguntar(i: number): void {
    this.quiz.itensQuiz.splice(i, 1);
  }

  public criarQuiz(): void {
    this.quizService
    .criarQuiz(this.quiz)
    .subscribe(b => {
      if(b)
        alert("quiz criado");
    });
  }

}
