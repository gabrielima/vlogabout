import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioVideosComponent } from './calendario-videos.component';

describe('CalendarioVideosComponent', () => {
  let component: CalendarioVideosComponent;
  let fixture: ComponentFixture<CalendarioVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
