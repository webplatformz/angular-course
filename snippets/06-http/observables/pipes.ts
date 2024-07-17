import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Course = { name: string; room: number; duration: number };

const getListOfCourses$ = new Observable<Course>();

getListOfCourses$.pipe(map((course: Course) => course.name)).subscribe((courseName: string) => {
  console.log(courseName);
});
