import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
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
    },
  ];

  constructor() {}

  ngOnInit() {}
}
