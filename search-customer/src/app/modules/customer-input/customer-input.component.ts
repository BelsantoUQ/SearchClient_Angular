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

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  customerNotFound = false; // se añade esta propiedad para controlar si el cliente no se encuentra

  onSubmit() {
    const { documentType, documentNumber } = this.formData;
    this.customerService.getCustomerByDocument(documentType, documentNumber).subscribe(
      (customer) => {
        if (customer) {
          this.router.navigate(['/customer-summary', customer.id]);
        } else {
          this.customerNotFound = true; // Activa el indicador de cliente no encontrado
        }
      },
      (error) => {
        console.error('Error al obtener el cliente: ', error);
      }
    );
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
