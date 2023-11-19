// pergunta.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent {
  @Input() pergunta: any;
  @Input() respostaCorretaStatus: string | null = null;
  @Output() respostaSelecionada = new EventEmitter<string>();
  // opcaoSelecionada: string = '';
  opcaoSelecionada: string | null = null;

  
  selecionarResposta(resposta: string): void {

    // Atualizar a opcaoSelecionada no componente
    this.opcaoSelecionada = resposta;

    // Emitir a resposta selecionada para o componente pai
    this.respostaSelecionada.emit(resposta);

  }


  limparEstilosOpcoes(): void {
    this.pergunta.opcoes.forEach((opcao: string) => {
      const opcaoElement = document.getElementById(opcao);
      if (opcaoElement) {
        opcaoElement.classList.remove('opcao-correta', 'opcao-incorreta');
      }
    });
  }

}
