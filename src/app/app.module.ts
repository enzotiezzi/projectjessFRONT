import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResenhasComponent } from './resenhas/resenhas.component';
import { SimpleTinyComponent } from './components/tinymce/tinymce.component';
import { CriarResenhaComponent } from './resenhas/criar-resenha.component';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { QuizResponderComponent } from './quiz/quiz-responder.component';
import { ResenhaItemComponent } from './components/resenha-item/resenha-item.component';
import { ResenhaComponent } from './resenhas/resenha.component';
import { MdlModule } from 'angular2-mdl';
import { QuestionarioComponent } from './questionario/questionario.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResenhasComponent,
    SimpleTinyComponent,
    CriarResenhaComponent,
    QuizComponent,
    PageNotFoundComponent,
    QuizResponderComponent,
    ResenhaItemComponent,
    ResenhaComponent,
    QuestionarioComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
