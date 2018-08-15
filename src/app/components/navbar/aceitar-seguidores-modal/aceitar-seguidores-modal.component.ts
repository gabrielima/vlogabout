import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aceitar-seguidores-modal',
  templateUrl: './aceitar-seguidores-modal.component.html',
  styleUrls: ['./aceitar-seguidores-modal.component.scss']
})
export class AceitarSeguidoresModalComponent {
  solicitacoes = [
    { name: 'Carlos Pereira', instagram: 'CarlosPereira', img: '1' },
    { name: 'Carlos Pereira', instagram: 'CarlosPereira', img: '3' },
    { name: 'Douglas Silva', instagram: 'DouglasSilva', img: '2' },
    { name: 'Carol Rennier', instagram: 'CarolRennier', img: '3' },
    { name: 'Carlos Pereira', instagram: 'CarlosPereira', img: '1' },
    { name: 'Douglas Silva', instagram: 'DouglasSilva', img: '2' }
  ];

  constructor(public modal: NgbActiveModal) { }
}
