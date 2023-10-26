import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInputComponent } from './modules/customer-input/customer-input.component';
import { CustomerSummaryComponent } from './modules/customer-summary/customer-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInputComponent,
    CustomerSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // agregar FormsModule en el array de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
