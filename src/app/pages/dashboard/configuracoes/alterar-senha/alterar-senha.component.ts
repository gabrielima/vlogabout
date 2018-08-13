import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {
  profile = {
    picture: 'assets/imgs/carlos-oliver.png',
    name: 'CarlosOliver'
  };

  constructor() { }

  ngOnInit() { }
}
