import { Component } from '@angular/core';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

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
