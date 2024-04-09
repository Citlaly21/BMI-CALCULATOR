import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarClclComponent } from './components/navbar-clcl/navbar-clcl.component';
import { BmiCalculatorClclComponent } from './components/bmi-calculator-clcl/bmi-calculator-clcl.component';

@NgModule({
  declarations: [
    AppComponent,
  
    NavbarClclComponent,
    BmiCalculatorClclComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
