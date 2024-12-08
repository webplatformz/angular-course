import { Address } from './address';

export interface Hero {
  id: number;
  name: string;
  description?: string;
  address?: Address;
}
