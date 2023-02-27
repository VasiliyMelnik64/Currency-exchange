import { Wrapper, getInnerHTML } from '../../../../../shared/lib/utils/testing';
import { CurrencyHistoryTable } from '..';

describe('CurrencyHistoryTable', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(CurrencyHistoryTable);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const title = wrapper.find('th').find('span').at(0);

    expect(getInnerHTML(title)).toContain('Date');
  });
});
