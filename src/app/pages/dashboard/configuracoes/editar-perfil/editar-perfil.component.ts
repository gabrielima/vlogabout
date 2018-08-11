import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  profile = {
    picture: 'https://picsum.photos/100/150',
    name: 'CarlosOliver'
  };

  constructor() { }

  ngOnInit() { }

}
