import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavBuscaComponent } from './nav-busca/nav-busca.component';
import { NavNotificacoesComponent } from './nav-notificacoes/nav-notificacoes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  navbarCollapsed = true;
  showBackdrop = false;
  showBusca = false;
  showNotificacoes = false;

  constructor(private modalService: NgbModal) {

  }

  // se for mobile, abre como modal,
  // se for desktop abre como popover
  open(type) {
    const size = window.innerWidth;

    if (size < 768) {
      const component = type === 'Busca' ? NavBuscaComponent : NavNotificacoesComponent;
      const modalRef = this.modalService.open(component, {
        centered: true
      });

      modalRef.componentInstance.isModal = true;
    } else {
      this.openPopover(type);
    }
  }

  openPopover(popover) {
    this['show' + popover] = true;
    this.showBackdrop = true;
  }

  closePopover() {
    this.showBackdrop = false;
    this.showBusca = false;
    this.showNotificacoes = false;
  }
}
