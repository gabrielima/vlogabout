import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-busca',
  templateUrl: './nav-busca.component.html',
  styleUrls: ['./nav-busca.component.scss']
})
export class NavBuscaComponent {
  @Input() isModal: boolean;

  results = [
    { instagram: 'CarlosOliver', img: '', followingYou: true },
    { instagram: 'CarlosOliver', img: '', followingYou: false },
    { instagram: 'CarlosOliver', img: '', followingYou: false },
    { instagram: 'CarlosOliver', img: '', followingYou: false },
    { instagram: 'CarlosOliver', img: '', followingYou: false },
    { instagram: 'CarlosOliver', img: '', followingYou: false }
  ];
}
