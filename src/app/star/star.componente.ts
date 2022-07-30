import { style } from "@angular/animations";
import { Component, Input, OnChanges } from "@angular/core";

@Component({
        selector: 'app-star',
        templateUrl: './star.componente.html',
        styleUrls: ['./star.componente.css']
})
export class StarComponentes implements OnChanges{

    @Input()
    avaliacao: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.avaliacao * 74 / 5;
    }
}