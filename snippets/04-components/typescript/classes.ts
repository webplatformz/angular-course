class Student {
  firstName: string;
  courses: string[];

  constructor(firstName: string, courses: string[]) {
    this.firstName = firstName;
    this.courses = courses;
  }

  addCourse(course: string) {
    this.courses.push(course);
  }
}

const student = new Student('Ernesto', ['English']);

class StudentShorthand {
  constructor(
    public firstName: string,
    public courses: string[],
  ) {}

  addCourse(course: string) {
    this.courses.push(course);
  }
}

const studentShorthand = new StudentShorthand('Ernesto', ['English']);
