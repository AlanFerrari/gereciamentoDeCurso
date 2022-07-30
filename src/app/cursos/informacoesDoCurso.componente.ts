import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./curso";
import { CursoServico } from "./curso.servico";

@Component({
    templateUrl: './informacoesDoCurso.componente.html'
})
export class InformacoesDoCurso implements OnInit{
    curso: Curso;

    constructor(private activateRoute: ActivatedRoute, curso: Curso, private cursoServico: CursoServico) {
        this.curso = curso;
     }

    ngOnInit(): void{
            
        this.curso = this.cursoServico.recuperarPorId(Number(this.activateRoute.snapshot.paramMap.get('id')));
        
    }
}