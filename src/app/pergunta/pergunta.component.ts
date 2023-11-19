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

  selecionarResposta(resposta: string): void {
    this.respostaSelecionada.emit(resposta);
  }
}
