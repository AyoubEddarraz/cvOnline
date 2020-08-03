import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposMoiComponent } from './propos-moi.component';

describe('ProposMoiComponent', () => {
  let component: ProposMoiComponent;
  let fixture: ComponentFixture<ProposMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
