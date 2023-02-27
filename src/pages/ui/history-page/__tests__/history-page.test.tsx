import { Wrapper, getInnerHTML } from '../../../../app/lib/utils/testing';
import HistoryPage from '..';

describe('HistoryPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Wrapper(HistoryPage);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const title = wrapper.find('span').at(0);

    expect(getInnerHTML(title)).toContain('Conversion history');
  });
});
