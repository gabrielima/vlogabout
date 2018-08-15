import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendario-modal',
  templateUrl: './calendario-modal.component.html',
  styleUrls: ['./calendario-modal.component.scss']
})
export class CalendarioModalComponent {
  constructor(public modal: NgbActiveModal) { }
}
