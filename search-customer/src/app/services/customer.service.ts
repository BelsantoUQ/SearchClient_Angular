// CustomerService
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://127.0.0.1:8090/customer-info';

  constructor(private http: HttpClient) {}

  getCustomerByDocument(documentType: string, documentNumber: string): Observable<Customer | undefined> {
    const url = `${this.apiUrl}?type=${documentType}&documentNumber=${documentNumber}`;
    console.log('Solicitud al servidor: ', url);
    return this.http.get<Customer>(url).pipe(
      map((response: any) => new Customer(
        parseInt(documentNumber),
        documentType,
        response.documentNumber,
        response.firstName,
        response.secondName,
        response.lastName,
        response.secondLastName,
        response.address,
        response.city
      )),
      catchError((error) => {
        console.error('Error al obtener el cliente: ', error);
        return throwError(error);
      })
    );
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    const url = `${this.apiUrl}/${id}`;
    console.log('Solicitud al servidor: ', url);
    return this.http.get<Customer>(url).pipe(
      catchError((error) => {
        console.error('Error al obtener el cliente por ID: ', error);
        return throwError(error);
      })
    );
  }
}
