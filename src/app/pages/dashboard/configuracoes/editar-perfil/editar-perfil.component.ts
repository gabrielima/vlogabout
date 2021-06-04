import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  profile = {
    picture: 'assets/imgs/carlos-oliver.png',
    name: 'CarlosOliver'
  };

  constructor() { }

  ngOnInit() { }

}
