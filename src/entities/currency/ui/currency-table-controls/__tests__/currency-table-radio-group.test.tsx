import { Wrapper, getInnerHTML } from '../../../../../shared/lib/utils/testing';
import { CurrencyTableRadioGroup } from '../currency-table-radio-group';

describe('CurrencyTableRadioGroup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(CurrencyTableRadioGroup);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const title = wrapper.find('span').at(3);

    expect(getInnerHTML(title)).toContain('Table');
  });
});
