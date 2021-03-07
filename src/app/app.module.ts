import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ColecaoCursosComponent } from './colecao-cursos/colecao-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ColecaoCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
