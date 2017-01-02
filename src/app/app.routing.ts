import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ResenhasComponent } from './resenhas/resenhas.component';
import { CriarResenhaComponent } from './resenhas/criar-resenha.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resenhas', component: ResenhasComponent},
    { path: 'resenhas/criar', component: CriarResenhaComponent },
    { path: 'quiz/criar',  component: QuizComponent }
]