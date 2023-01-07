export enum Classification {
  CLASSIFIED = 'CLASSIFIED',
  PUBLIC = 'PUBLIC',
}

export interface Hero {
  id: number;
  name: string;
  classification: Classification;
}
