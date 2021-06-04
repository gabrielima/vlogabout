import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedItemComponent } from './feed-item/feed-item.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  showModal = false;

  constructor(private modalService: NgbModal) { }

  openModal(str) {
    const modalRef = this.modalService.open(FeedItemComponent, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.isModal = true;
  }
}
