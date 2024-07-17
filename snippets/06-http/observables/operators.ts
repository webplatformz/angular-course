import { filter, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

type Course = { name: string; room: number; duration: number };

const getListOfCourses$ = new Observable<Course>();

getListOfCourses$
  .pipe(
    filter((course: Course) => course.duration > 60),
    map((course: Course) => course.name),
    tap((courseName: string) => console.log(courseName)),
  )
  .subscribe(courseName => {
    console.log(courseName);
  });
