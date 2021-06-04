import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarSeguidoresModalComponent } from './aceitar-seguidores-modal.component';

describe('AceitarSeguidoresModalComponent', () => {
  let component: AceitarSeguidoresModalComponent;
  let fixture: ComponentFixture<AceitarSeguidoresModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitarSeguidoresModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitarSeguidoresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
