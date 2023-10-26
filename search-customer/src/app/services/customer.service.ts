import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://127.0.0.1:8090/customer-info';

  constructor(private http: HttpClient) { }

  getCustomerByDocument(documentType: string, documentNumber: string): Observable<Customer | undefined> {
    const url = `${this.apiUrl}?type=${documentType}&documentNumber=${documentNumber}`;
    return this.http.get<Customer>(url);
  }

  // Este método se dejará así por ahora, hasta que se decida cómo manejar la obtención de un cliente por su ID desde la API.
  getCustomerById(id: number): Observable<Customer | undefined> {
    return new Observable<Customer | undefined>(observer => {
      observer.error('Method not implemented yet.');
      observer.complete();
    });
  }
}
