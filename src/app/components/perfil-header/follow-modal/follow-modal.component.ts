import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.scss']
})
export class FollowModalComponent {
  @Input() tab = 'Followers';
  @Input() followers: any;
  @Input() following: any;

  constructor(public modal: NgbActiveModal) { }

  switchTab(tab) {
    this.tab = tab;
  }
}
