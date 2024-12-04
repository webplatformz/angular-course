let course: string | number;
course = 'Angular';
course = 12345;
course = false; // Type boolean is not assignable to type string | number

let speaker: 'Marco' | 'Silas' | 'Timo';
speaker = 'Lucas'; // Type 'Lucas' is not assignable...
