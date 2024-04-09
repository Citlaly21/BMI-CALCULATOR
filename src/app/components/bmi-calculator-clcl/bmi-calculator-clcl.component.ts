import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'CLCL-app-bmi-calculator-clcl',
  templateUrl: './bmi-calculator-clcl.component.html',
  styleUrls: ['./bmi-calculator-clcl.component.css']
})
export class BmiCalculatorClclComponent implements OnInit {

  weight: number = 0; 
  height: number = 0; 
  age: number = 0; 
  gender: string = ''; 
  bmi: number = 0; 

  calculateBMI() {
    const heightInMeters = this.height / 100; 
    this.bmi = this.weight / (heightInMeters * heightInMeters);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
