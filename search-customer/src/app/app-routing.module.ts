import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInputComponent } from './modules/customer-input/customer-input.component';
import { CustomerSummaryComponent } from './modules/customer-summary/customer-summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-input', pathMatch: 'full' },
  { path: 'customer-input', component: CustomerInputComponent },
  { path: 'customer-summary/:id', component: CustomerSummaryComponent }, // Asegúrate de incluir el parámetro de ID en la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
