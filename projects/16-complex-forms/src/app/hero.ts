import { Address } from './address';

export enum Classification {
  CLASSIFIED = 'CLASSIFIED',
  PUBLIC = 'PUBLIC',
}

export interface Hero {
  id: number;
  name: string;
  description?: string;
  classification: Classification;
  address?: Address;
}
