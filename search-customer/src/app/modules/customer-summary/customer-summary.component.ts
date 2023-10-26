import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model'; // Importa la clase Customer

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {
  customerInfo: Customer | undefined; // usar la clase Customer

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id']; // Convierte el parámetro a un número
      this.customerService.getCustomerById(customerId).subscribe(customer => {
        if (customer) {
          this.customerInfo = customer;
        } else {
          // Manejar el caso cuando no se encuentra el cliente
        }
      });
    });
  }

  goBack() {
    this.router.navigate(['/customer-input']); // Navegar de regreso a la página de entrada del cliente
  }
}
