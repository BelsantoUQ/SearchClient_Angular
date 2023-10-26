export class Customer {
  id: number;
  documentType: string;
  documentNumber: string;
  name: string;
  lastname: string;
  address: string;

  constructor(
    id: number,
    documentType: string,
    documentNumber: string,
    name: string,
    lastname: string,
    address: string
  ) {
    this.id = id;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.name = name;
    this.lastname = lastname;
    this.address = address;
  }
}
