export class Customer {
  id: number | string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  address: string;
  city: string;

  constructor(
    id: number,
    documentType: string,
    documentNumber: string,
    firstName: string,
    secondName: string,
    lastName: string,
    secondLastName: string,
    address: string,
    city: string
  ) {
    this.id = id;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.secondLastName = secondLastName;
    this.address = address;
    this.city = city;
  }
}
