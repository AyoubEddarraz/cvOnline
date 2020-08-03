import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaissanceComponent } from './connaissance.component';

describe('ConnaissanceComponent', () => {
  let component: ConnaissanceComponent;
  let fixture: ComponentFixture<ConnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
