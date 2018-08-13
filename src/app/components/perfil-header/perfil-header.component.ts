import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-header',
  templateUrl: './perfil-header.component.html',
  styleUrls: ['./perfil-header.component.scss']
})
export class PerfilHeaderComponent implements OnInit {
  profile = {
    name: 'Carlos Oliver',
    instagram: 'carlos.oliver',
    picture: 'assets/imgs/carlos-oliver.png'
  };

  constructor() {}

  ngOnInit() {}
}
