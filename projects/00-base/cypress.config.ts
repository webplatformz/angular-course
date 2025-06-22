import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '.',
          sourceRoot: '.',
          buildOptions: {},
        },
      },
    },
    specPattern: '**/*.cy.ts',
  },
});
