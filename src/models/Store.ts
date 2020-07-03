import Address from "./Address";

export default interface Store {
  id: number;
  name: string;
  description: string;
  phone: string;
  classification: number;
  available: boolean;
  address: Address;
}
