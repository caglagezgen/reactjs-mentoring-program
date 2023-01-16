import { cleanup } from '@testing-library/react';
import handleError from '@app/utils/handleError';

afterEach(cleanup);

describe('handleError', () => {
  /* eslint-disable no-console */
  it('calls console.log and alert with error mesage', () => {
    const message = 'hello';

    console.error = jest.fn();
    window.alert = jest.fn();

    handleError(new Error(message));

    expect(console.error).toHaveBeenCalledWith(message);
    expect(window.alert).toHaveBeenCalledWith(message);
  });
  /* eslint-enable no-console */
});
