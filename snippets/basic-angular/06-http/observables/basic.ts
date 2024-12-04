import { Observable } from 'rxjs';

const getListOfCourses$ = new Observable<string>();

getListOfCourses$.subscribe((courses: string) => {
  console.log(courses);
});
