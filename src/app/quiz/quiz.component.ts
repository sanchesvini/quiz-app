
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: any;
  pontuacao: number = 0;
  perguntaAtual: number = 0;
  respostaUsuario: string = '';
  quizConcluido: boolean = false;
  respostaCorretaStatus: string | null = null;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    console.log('QuizComponent initialized');
    this.carregarQuiz();
  }

  carregarQuiz(): void {
    this.quizService.getQuiz().subscribe(data => {
      this.quiz = data.quiz;
      this.perguntaAtual = 0;
      this.pontuacao = 0;
      this.respostaUsuario = '';
      this.quizConcluido = false;
    });
  }

  onRespostaSelecionada(resposta: string): void {
    this.respostaUsuario = resposta;
  }

  verificarResposta(): void {
    const respostaCorreta = this.quiz[this.perguntaAtual].resposta;

    const respostaEstaCorreta = this.respostaUsuario === respostaCorreta;
    this.respostaCorretaStatus = this.respostaUsuario === respostaCorreta ? 'correta' : 'incorreta';

    setTimeout(() => {

      this.respostaUsuario = '';
      this.perguntaAtual++;

      if (this.perguntaAtual === this.quiz.length) {
        this.quizConcluido = true;
      }
      this.respostaCorretaStatus = null;
    }, 1000);
  }


}
