import { Wrapper, getInnerHTML } from '../../../../../shared/lib/utils/testing';
import { CurrencyRatingTable } from '..';

describe('CurrencyRatingTable', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(CurrencyRatingTable);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const title = wrapper.find('th').find('span').at(0);

    expect(getInnerHTML(title)).toContain('Statistics');
  });
});
