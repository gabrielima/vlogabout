import { Component } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // modal animation
  constructor() {
    NgbModalRef.prototype['c'] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector('.modal-backdrop').classList.remove('show');
      document.querySelector('.modal').classList.remove('show');
      setTimeout(() => {
        this['c'](reason);
      }, 500);
    };
    NgbModalRef.prototype['d'] = NgbModalRef.prototype.dismiss;
    NgbModalRef.prototype.dismiss = function (reason: string) {
      document.querySelector('.modal-backdrop').classList.remove('show');
      document.querySelector('.modal').classList.remove('show');
      setTimeout(() => {
        this['d'](reason);
      }, 500);
    };
  }
}
