import { Injectable } from "@angular/core";
import { Curso } from "./curso";

@Injectable({
    providedIn: 'root'
})
export class CursoServico {

    recuperarTodos(): Curso[]{
        return CURSOS;
    }

    recuperarPorId(id: number): Curso {
        
        return CURSOS.find((interesseNoCurso: Curso) => interesseNoCurso.id === id)!;
    }
}

var CURSOS: Curso[] = [
    {
        id: 1,
        nome: 'Angular: CLI',
        dataDeLancamento: 'November 2, 2019',
        descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duracao: 120,
        codigo: 'XLF-1212',
        avaliacao: 3,
        preco: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        nome: 'Angular: Forms',
        dataDeLancamento: 'November 4, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duracao: 80,
        codigo: 'DWQ-3412',
        avaliacao: 3.5,
        preco: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        nome: 'Angular: HTTP',
        dataDeLancamento: 'November 8, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duracao: 80,
        codigo: 'QPL-0913',
        avaliacao: 4.0,
        preco: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        nome: 'Angular: Router',
        dataDeLancamento: 'November 16, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duracao: 80,
        codigo: 'OHP-1095',
        avaliacao: 4.5,
        preco: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        nome: 'Angular: Animations',
        dataDeLancamento: 'November 25, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duracao: 80,
        codigo: 'PWY-9381',
        avaliacao: 5,
        preco: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];