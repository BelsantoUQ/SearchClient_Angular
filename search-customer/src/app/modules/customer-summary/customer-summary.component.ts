// CustomerSummaryComponent
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {
  customerInfo: Customer | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id'];
      const idType = params['type'];
      console.log("TIPO ID ------>"+idType);
      this.customerService.getCustomerByDocument(idType+"", customerId+"").subscribe(
        (customer) => {
          if (customer) {
            console.log('Respuesta del servidor: ', customer);
            this.customerInfo = customer;
          } else {
            console.log('El servidor ha respondido, pero no se encontró ningún cliente.');
          }
        },
        (error) => {
          console.error('Error al obtener el cliente: ', error);
        }
      );
    });
  }

  goBack() {
    this.router.navigate(['/customer-input']);
  }
}
