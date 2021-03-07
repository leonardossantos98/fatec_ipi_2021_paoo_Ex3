import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos = [{nome: "Eletrônica", cargaHoraria: "20 horas semanais"}, {nome: "Mecânica", cargaHoraria: "16 horas semanais"}, {nome: "Mecatrônica", cargaHoraria: "24 horas semanais"}, {nome: "Desenvolvimento de sistemas", cargaHoraria: "20 horas semanais"}];

  onAdicionarCurso(curso){
    this.cursos = [curso, ...this.cursos];
  }
}
