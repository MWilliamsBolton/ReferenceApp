import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipemonComponent } from './pipemon.component';

describe('PipemonComponent', () => {
  let component: PipemonComponent;
  let fixture: ComponentFixture<PipemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
