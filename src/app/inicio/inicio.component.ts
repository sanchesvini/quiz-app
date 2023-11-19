// inicio.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) { }

  iniciarQuiz(): void {
    // Adicione a lógica para navegar para a tela de quiz aqui
    this.router.navigate(['/quiz']); // '/quiz' é a rota para a tela de quiz
  }
}
