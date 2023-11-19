// inicio.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  mostrarInicio: boolean = true;
  iniciarQuiz(): void {
    this.mostrarInicio = false;
    const quizSection = document.getElementById('quizSection');
    if (quizSection) {
      window.scrollTo({ top: quizSection.offsetTop, behavior: 'smooth' });

    }
  }
}
