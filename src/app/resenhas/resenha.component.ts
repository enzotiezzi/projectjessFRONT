import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResenhaService } from './shared/resenha.service';
import { Resenha } from './shared/resenha';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'resenha',
    templateUrl: './resenha.component.html',
    styleUrls: ['./resenhas.component.css'],
    providers: [ResenhaService]
})

export class ResenhaComponent implements OnInit {

    resenha: Resenha = new Resenha();
    safeHTML: SafeHtml = null;

    constructor(private route: ActivatedRoute,
                private resenhaService: ResenhaService,
                private sanitized: DomSanitizer) { }

    ngOnInit() { 
        this.route.params.subscribe(params => {
            let id = params['id'];

            this.resenhaService
            .buscarResenha(id)
            .subscribe(r => {
                this.safeHTML = this.sanitized.bypassSecurityTrustHtml(r.resenha);
                this.resenha = r;
            });
        });
    }
}