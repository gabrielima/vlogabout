import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNotificacoesComponent } from './nav-notificacoes.component';

describe('NavNotificacoesComponent', () => {
  let component: NavNotificacoesComponent;
  let fixture: ComponentFixture<NavNotificacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNotificacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
