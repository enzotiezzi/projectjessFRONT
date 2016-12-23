import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ResenhasComponent } from './resenhas/resenhas.component';
import { CriarResenhaComponent } from './resenhas/criar-resenha.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resenhas', component: ResenhasComponent},
    { path: 'resenhas/criar', component: CriarResenhaComponent }
]