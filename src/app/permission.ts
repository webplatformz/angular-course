export interface Permission {
  id: number;
  operation: Operation;
  allowed: boolean;
}

export enum Operation {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}
