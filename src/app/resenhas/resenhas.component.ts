import { Component, OnInit } from '@angular/core';
import { ResenhaService } from './shared/resenha.service';
import { Resenha } from './shared/resenha';

@Component({
  selector: 'app-resenhas',
  templateUrl: './resenhas.component.html',
  styleUrls: ['./resenhas.component.css'],
  providers: [ResenhaService]
})
export class ResenhasComponent implements OnInit {

  resenhas: Resenha[] = [];

  constructor(private resenhaService: ResenhaService) { }

  ngOnInit() {
    this.resenhaService
      .listarResenhas()
      .subscribe(r => {
        this.resenhas = r;
      });
  }
}
