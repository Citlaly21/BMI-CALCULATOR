import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorClclComponent } from './bmi-calculator-clcl.component';

describe('BmiCalculatorClclComponent', () => {
  let component: BmiCalculatorClclComponent;
  let fixture: ComponentFixture<BmiCalculatorClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
