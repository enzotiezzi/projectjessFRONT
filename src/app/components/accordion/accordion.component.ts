import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnInit {

    @Input()
    titulo: string = "";

    @Output()
    toggleView: EventEmitter<any[]> = new EventEmitter<any[]>();


    aberto: boolean;

    constructor() { }

    ngOnInit() { }

    public toggle(): void {
        this.aberto = !this.aberto;

        this.toggleView.emit([this.aberto, this.titulo]);
    }
}