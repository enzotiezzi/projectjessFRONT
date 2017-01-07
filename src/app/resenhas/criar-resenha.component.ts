import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SimpleTinyComponent } from '../components/tinymce/tinymce.component';
import { UploadService } from '../shared/upload-image.service';
import { Resenha } from './shared/resenha';
import { ResenhaService } from './shared/resenha.service';

@Component({
    selector: 'criar-resenha',
    templateUrl: './criar-resenha.component.html',
    styleUrls: ['./resenhas.component.css'],
    providers: [UploadService, ResenhaService]
})

export class CriarResenhaComponent implements OnInit {
    @ViewChild("tiny") tinyComponent: SimpleTinyComponent;
    @ViewChild("foto") fotoElement: ElementRef;

    resenha: Resenha = new Resenha();

    constructor(private uploadService: UploadService,
                private resenhaService: ResenhaService) { }

    ngOnInit() { }

    public criarResenha(): void {
        this.uploadService
        .makeFileRequest(this.fotoElement.nativeElement.files[0], (r) => {
            let json = JSON.parse(r);

            this.resenha.linkImagem = json.data.link;
            this.resenha.resenha = this.tinyComponent.getContent();

            this.resenhaService
            .criarResenha(this.resenha)
            .subscribe(b => {
                if(b)
                    alert("Resenha Criada");
            });
        });
    }
}