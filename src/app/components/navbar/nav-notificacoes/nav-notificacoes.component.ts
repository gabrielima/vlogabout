import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AceitarSeguidoresModalComponent } from '../aceitar-seguidores-modal/aceitar-seguidores-modal.component';

@Component({
  selector: 'app-nav-notificacoes',
  templateUrl: './nav-notificacoes.component.html',
  styleUrls: ['./nav-notificacoes.component.scss']
})
export class NavNotificacoesComponent {
  @Input() isModal: boolean;

  constructor(private modalService: NgbModal) {}

  openModalSolicitacoes() {
    this.modalService.open(AceitarSeguidoresModalComponent, {
      centered: true,
      size: 'lg'
    });
  }
}
