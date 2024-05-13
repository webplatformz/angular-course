import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now();

  return next(req).pipe(
    tap(res => {
      if (res.type === HttpEventType.Response) {
        // todo: call getStats with arguments
        const data = undefined;
        console.log(data);
      }
    }),
  );
};

function getStats(method: string, url: string, status: number, start: number) {
  return `${method} ${url}: ${status}: ${Date.now() - start} ms`;
}
