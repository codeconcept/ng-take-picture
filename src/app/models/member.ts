import { Address } from './address';

export interface Member {
  firstName: string;
  name: string;
  dob: Date;
  dateOfSubscription: Date;
  imageName: string;
  address: Address;
}
