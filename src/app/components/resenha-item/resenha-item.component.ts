import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Resenha } from '../../resenhas/shared/resenha';

@Component({
    selector: 'resenha-item',
    templateUrl: './resenha-item.component.html',
    styleUrls: ['./resenha-item.component.css']
})
export class ResenhaItemComponent implements OnInit, AfterViewInit {

    @Input()
    resenha: Resenha;

    notas: number[] = [];

    constructor() { }

    ngAfterViewInit(){
        
    }

    ngOnInit() {
        if(this.resenha.nota > 5)
            this.resenha.nota = 5;
        else
            if(this.resenha.nota < 0)
                this.resenha.nota = 0;

        this.notas = Array(this.resenha.nota).fill(0);
    }
}