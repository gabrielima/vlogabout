import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarioModalComponent } from '../calendario-modal/calendario-modal.component';

@Component({
  selector: 'app-calendario-videos',
  templateUrl: './calendario-videos.component.html',
  styleUrls: ['./calendario-videos.component.scss']
})
export class CalendarioVideosComponent {
  weeks = [
    [
      { day: 1, video: null },
      { day: 2, video: null },
      { day: 3, video: null },
      { day: 4, video: null },
      { day: 5, video: 'assets/imgs/calendario/video.png' },
      { day: 6, video: null },
      { day: 7, video: null }
    ],
    [
      { day: 8, video: null },
      { day: 9, video: 'assets/imgs/calendario/video.png' },
      { day: 10, video: null },
      { day: 11, video: 'assets/imgs/calendario/video.png' },
      { day: 12, video: null },
      { day: 13, video: null },
      { day: 14, video: 'assets/imgs/calendario/video.png' }
    ],
    [
      { day: 15, video: null },
      { day: 16, video: null },
      { day: 17, video: null },
      { day: 18, video: null },
      { day: 19, video: 'assets/imgs/calendario/video.png' },
      { day: 20, video: 'assets/imgs/calendario/video.png' },
      { day: 21, video: null }
    ],
    [
      { day: 22, video: null },
      { day: 23, video: null },
      { day: 24, video: null },
      { day: 25, video: 'assets/imgs/calendario/video.png' },
      { day: 26, video: null },
      { day: 27, video: null },
      { day: 28, video: 'assets/imgs/calendario/video.png' }
    ],
    [
      { day: 29, video: null },
      { day: 30, video: 'assets/imgs/calendario/video.png' },
      { day: 31, video: null }
    ]
  ];

  constructor(private modalService: NgbModal) {

  }

  open(video) {
    if (!video) {
      return;
    }

    const modalRef = this.modalService.open(CalendarioModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.video = video;
  }
}
