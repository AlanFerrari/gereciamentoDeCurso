import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'substituir'
})
export class SubstituirPipe implements PipeTransform{
    transform(value: string, caracter: string, valorParaSubstituir: string){
        return value.replace(caracter, valorParaSubstituir);
    }
}