import Customer from '../../Customers/entities/Customer';
import Oil from '../../Oil/entities/Oil';

export default interface ICreateOilChangeDTO {
  customer: Customer;
  oil: Oil;
  expiration_date: Date;
}
