import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBuscaComponent } from './nav-busca.component';

describe('NavBuscaComponent', () => {
  let component: NavBuscaComponent;
  let fixture: ComponentFixture<NavBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
