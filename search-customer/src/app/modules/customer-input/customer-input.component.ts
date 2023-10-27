// CustomerInputComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {
  formData: any = {
    documentType: '',
    documentNumber: ''
  };
  customerNotFound = false;

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {}

  onSubmit() {
    const { documentType, documentNumber } = this.formData;
    if (this.isFormValid()) {
      this.customerService.getCustomerByDocument(documentType, documentNumber).subscribe(
        (customer) => {
          if (customer) {
            console.log('Respuesta del servidor: ', customer);
            this.router.navigate(['/customer-summary', documentNumber, documentType]);
          } else {
            console.log('El servidor ha respondido, pero no se encontró ningún cliente.');
            this.customerNotFound = true;
          }
        },
        (error) => {
          console.error('Error al obtener el cliente: ', error);
          this.customerNotFound = true;
        }
      );
    }
  }

  isFormValid() {
    return (
      this.formData.documentType &&
      this.formData.documentNumber &&
      this.formData.documentNumber.length >= 8 &&
      this.formData.documentNumber.length <= 11
    );
  }
}
