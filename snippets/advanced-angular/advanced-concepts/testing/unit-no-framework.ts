import { loggingInterceptor } from './logging.interceptor';

describe('loggingInteceptor ("unit")', () => {
  it('logs request and response information', async () => {
    // arrange
    spyOn(window.console, 'log');

    // act
    loggingInterceptor(/**/).subscribe(() => {
      // assert
      expect(window.console.log).toHaveBeenCalledWith('...');
    });
  });
});
