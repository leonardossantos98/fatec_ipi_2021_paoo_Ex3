import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colecao-cursos',
  templateUrl: './colecao-cursos.component.html',
  styleUrls: ['./colecao-cursos.component.css']
})
export class ColecaoCursosComponent {

  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome, cargaHoraria){
    const curso = {nome, cargaHoraria};
    this.cursoAdicionado.emit(curso);
  }

}
