import { Wrapper, getInnerHTML } from 'shared/lib/utils/testing';
import { CurrencyExchangeForm } from '..';

describe('CurrencyExchangeForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(CurrencyExchangeForm);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const title = wrapper.find('span').at(4);

    expect(getInnerHTML(title)).toContain('Convert');
  });
});
