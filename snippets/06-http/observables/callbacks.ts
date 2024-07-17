import { Observable } from 'rxjs';

const getListOfCourses$ = new Observable<string[]>();

getListOfCourses$.subscribe({
  next: (courses: string[]) => showSuccess(courses),
  error: error => showError(error),
  complete: () => stopLoadingSpinner(),
});

function showSuccess(value: string[]) {}

function showError(error: any) {}

function stopLoadingSpinner() {}
