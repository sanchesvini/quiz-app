// pergunta.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent {
  @Input() pergunta: any;
  @Output() respostaSelecionada = new EventEmitter<string>();
  opcaoSelecionada: string = '';

  selecionarResposta(resposta: string): void {
    // Limpar a classe 'opcao-selecionada' de todas as opções
    this.pergunta.opcoes.forEach((opcao: string) => {
      document.getElementById(opcao)?.classList.remove('opcao-selecionada');
    });

    // Adicionar a classe 'opcao-selecionada' à opção clicada
    document.getElementById(resposta)?.classList.add('opcao-selecionada');

    // Atualizar a opcaoSelecionada no componente
    this.opcaoSelecionada = resposta;

    // Emitir a resposta selecionada para o componente pai
    this.respostaSelecionada.emit(resposta);

  }

  verificarResposta(): void {
    const respostaCorreta = this.pergunta.resposta;

    // Verificar se a resposta está correta
    const respostaEstaCorreta = this.opcaoSelecionada === respostaCorreta;

    // Adicionar classe correspondente à opção selecionada
    const opcaoSelecionadaElement = document.getElementById(this.opcaoSelecionada);
    if (opcaoSelecionadaElement) {
      opcaoSelecionadaElement.classList.add(respostaEstaCorreta ? 'opcao-correta' : 'opcao-incorreta');
    }

    // Aguardar por um breve delay antes de avançar para a próxima pergunta
    setTimeout(() => {
      // Limpar a classe e avançar para a próxima pergunta
      this.limparEstilosOpcoes();
      //this.avancarParaProximaPergunta();
    }, 2000); // Delay de 2 segundos
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
