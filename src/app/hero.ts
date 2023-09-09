export enum Classification {
  CLASSIFIED = 'RESTRICTED',
  PUBLIC = 'PUBLIC',
}

export interface Hero {
  id: number;
  name: string;
  classification: Classification;
}
