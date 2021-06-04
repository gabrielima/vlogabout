import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FollowModalComponent } from './follow-modal/follow-modal.component';

@Component({
  selector: 'app-perfil-header',
  templateUrl: './perfil-header.component.html',
  styleUrls: ['./perfil-header.component.scss']
})
export class PerfilHeaderComponent implements OnInit {
  profile = {
    name: 'Carlos Oliver',
    instagram: 'carlos.oliver',
    picture: 'assets/imgs/carlos-oliver.png'
  };

  followers = [
    { instagram: '@BrunoRodriguez' },
    { instagram: '@CarlosPereira' },
    { instagram: '@CarolRennier' },
    { instagram: '@DanielFontona' },
    { instagram: '@DouglasSilva' },
    { instagram: '@DouglasSilva' },
    { instagram: '@CarlolRennier' },
    { instagram: '@DanielFontona' }
  ];

  following = [
    { instagram: '@DouglasSilva' },
    { instagram: '@DouglasSilva' },
    { instagram: '@CarlolRennier' },
    { instagram: '@DanielFontona' },
    { instagram: '@BrunoRodriguez' },
    { instagram: '@CarlosPereira' },
    { instagram: '@CarolRennier' },
    { instagram: '@DanielFontona' },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(tab) {
    const modalRef = this.modalService.open(FollowModalComponent, {
      centered: true
    });
    modalRef.componentInstance.tab = tab;
    modalRef.componentInstance.followers = this.followers;
    modalRef.componentInstance.following = this.following;
  }
}
