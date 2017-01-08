import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ResenhasComponent } from './resenhas/resenhas.component';
import { CriarResenhaComponent } from './resenhas/criar-resenha.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResponderComponent } from './quiz/quiz-responder.component';
import { ResenhaComponent } from './resenhas/resenha.component';
import { QuestionarioComponent } from './questionario/questionario.component';

import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resenhas', component: ResenhasComponent},
    { path: 'resenhas/criar', component: CriarResenhaComponent },
    { path: 'resenhas/:id', component: ResenhaComponent },
    { path: 'quiz/criar',  component: QuizComponent },
    { path: 'quiz/responder/:id', component: QuizResponderComponent },
    { path: 'correcao/:id', component: QuestionarioComponent },
    { path: '**', component: PageNotFoundComponent }
]