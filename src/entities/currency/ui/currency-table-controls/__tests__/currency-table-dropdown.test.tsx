import { Wrapper, getInnerHTML } from '../../../../../app/lib/utils/testing';
import { CurrencyTableDropdown } from '../currency-table-dropdown';

describe('CurrencyTableDropdown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(CurrencyTableDropdown);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const label = wrapper.find('label').at(0);

    expect(getInnerHTML(label)).toContain('Duration');
  });
});
