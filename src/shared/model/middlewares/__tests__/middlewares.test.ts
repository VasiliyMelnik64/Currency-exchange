import { errorMiddleware } from '..';

describe('Error Middleware', () => {
  describe('Should works correctly', () => {
    describe('When pass next callback and action', () => {
      it('Then callback should trigger the action', () => {
        const testAction = {
          type: 'TEST',
        };

        const mockCallback = jest.fn();

        errorMiddleware()(mockCallback)(testAction);

        expect(mockCallback).toHaveBeenCalledWith(testAction);
      });
    });
  });
});
