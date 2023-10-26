import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    new Customer(1, 'Cedula de ciudadanía', '23445322', 'John', 'Doe', '123 Main St, City')
  ];

  constructor() { }

  getCustomerByDocument(documentType: string, documentNumber: string): Observable<Customer | undefined> {
    const customer = this.customers.find(
      (c) => c.documentType === documentType && c.documentNumber === documentNumber
    );
    return of(customer);
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    const customer = this.customers.find((c) => c.id === id);
    return of(customer);
  }
}
