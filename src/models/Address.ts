export default interface Address {
  id: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;

  latitude: number;
  longitude: number;
}
