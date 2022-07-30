import { Component, OnInit } from "@angular/core";
import { retry } from "rxjs";
import { Curso } from "./curso";
import { CursoServico } from "./curso.servico";

@Component({
    templateUrl: './curso-lista.componentes.html'
})
export class CursoListaDeComponentes implements OnInit {
    
    cursosFiltrados: Curso[] = [];

    _cursos: Curso[] = [];

    _filtrarPor!: string;

    constructor(private cursoServico: CursoServico) { }

    ngOnInit(): void {
        this._cursos = this.cursoServico.recuperarTodos();
        this.cursosFiltrados = this._cursos;
    }

    set filtro(value: string){
        this._filtrarPor = value;
        this.cursosFiltrados = this._cursos.filter((curso: Curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1);
    }

    get filtro(){
        return this._filtrarPor;
    }
}