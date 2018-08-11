import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  profile = {
    picture: 'https://picsum.photos/100/150',
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
    },
  ];

  constructor() {}

  ngOnInit() {}
}
