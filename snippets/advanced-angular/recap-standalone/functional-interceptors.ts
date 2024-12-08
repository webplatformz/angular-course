import { HttpInterceptorFn } from '@angular/common/http';

export const noopInterceptro: HttpInterceptorFn = (req, next) => {
  // apss untouched request to next handler
  return next(req);
};
