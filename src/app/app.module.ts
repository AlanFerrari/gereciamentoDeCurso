import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CursoListaDeComponentes } from './cursos/curso-lista.componentes';
import { StarComponentes} from './star/star.componente';
import { SubstituirPipe } from './pipe/substitui.pipe';
import { NavBarComponente } from './nav-bar/nav-bar.componente';
import { Erro404Componente } from './404/erro-404.componente';
import { InformacoesDoCurso } from './cursos/informacoesDoCurso.componente';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaDeComponentes,
    StarComponentes,
    SubstituirPipe,
    NavBarComponente,
    Erro404Componente,
    InformacoesDoCurso
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'cursos', component: CursoListaDeComponentes
      },
      {
        path: 'cursos/info/:id', component: InformacoesDoCurso
      },
      {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
      },
      {
        path: '**', component: Erro404Componente
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
