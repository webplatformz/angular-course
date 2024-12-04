import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type Course = { name: string; room: number; duration: number };

const getListOfCourses$ = new Observable<Course>();

getListOfCourses$.pipe(takeUntilDestroyed()).subscribe((course: Course) => console.log(course));
