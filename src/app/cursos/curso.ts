export class Curso {
    id: number;
    nome: string;
    imageUrl: string;
    preco: number;
    codigo: string;
    duracao: number;
    avaliacao: number;
    dataDeLancamento: string;
    descricao: string;


    constructor(id: number, nome: string, imageUrl: string, preco: number, codigo: string, duracao: number, avaliacao: number, dataDeLancamento: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this. imageUrl = imageUrl;
        this.preco = preco;
        this.codigo = codigo;
        this.duracao = duracao;
        this.avaliacao = avaliacao;
        this.dataDeLancamento = dataDeLancamento;
        this.descricao = descricao;
    }
}