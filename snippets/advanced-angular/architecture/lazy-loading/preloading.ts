import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules))],
});
