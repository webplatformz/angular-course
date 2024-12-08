export const Routes: Routes = [
  {
    path: 'foo',
    loadComponent: () => {
      return import('./foo/foo.component').then(m => m.FooComponent);
    },
  },
];
