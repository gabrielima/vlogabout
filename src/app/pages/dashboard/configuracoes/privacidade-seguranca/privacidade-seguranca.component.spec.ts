import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadeSegurancaComponent } from './privacidade-seguranca.component';

describe('PrivacidadeSegurancaComponent', () => {
  let component: PrivacidadeSegurancaComponent;
  let fixture: ComponentFixture<PrivacidadeSegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacidadeSegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacidadeSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
