import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent {
  @Input() isModal: boolean;

  profile = {
    picture: 'assets/imgs/carlos-oliver.png',
    name: 'CarlosOliver',
    instagram: 'carlos.oliver'
  };

  comments = [
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      name: 'danielmel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    }
  ];

  // constructor(public modal: NgbActiveModal) { }
}
