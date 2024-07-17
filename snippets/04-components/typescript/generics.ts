function insertAtBeginning(array: any[], value: any[]) {
  return [value, ...array];
}

function insertAtBeginning<T>(array: T[], value: T[]) {
  return [value, ...array];
}
