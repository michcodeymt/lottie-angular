import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumtecComponent } from './sumtec.component';

describe('SumtecComponent', () => {
  let component: SumtecComponent;
  let fixture: ComponentFixture<SumtecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumtecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
