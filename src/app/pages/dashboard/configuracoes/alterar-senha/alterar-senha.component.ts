import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {
  profile = {
    picture: 'https://picsum.photos/100/150',
    name: 'CarlosOliver'
  };

  constructor() { }

  ngOnInit() { }
}
