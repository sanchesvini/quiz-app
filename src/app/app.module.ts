import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { PerguntaComponent } from './pergunta/pergunta.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
    declarations: [
        QuizComponent,
        PerguntaComponent,
        InicioComponent,
        AppComponent,



    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        QuizService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }