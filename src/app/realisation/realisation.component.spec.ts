import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationComponent } from './realisation.component';

describe('RealisationComponent', () => {
  let component: RealisationComponent;
  let fixture: ComponentFixture<RealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
