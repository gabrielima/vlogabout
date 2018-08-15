import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showModal = false;
  showPopover = false;

  ngOnInit() {
    EventEmitterService.get('toggle-modal').subscribe(() => this.showModal = !this.showModal);
    EventEmitterService.get('toggle-popover').subscribe(() => this.showPopover = !this.showPopover);
  }
}
