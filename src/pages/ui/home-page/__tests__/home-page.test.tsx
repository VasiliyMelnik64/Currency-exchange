import { Wrapper } from 'shared/lib/utils/testing';
import HomePage from '..';

describe('HomePage', () => {
  let wrapper;
  let mockedCurrency1;
  let mockedCurrency2;
  let mockedAmount;

  beforeEach(() => {
    wrapper = Wrapper(HomePage);
    mockedCurrency1 = 'EUR';
    mockedCurrency2 = 'USD';
    mockedAmount = 100;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should change values between inputs properly', () => {
    const amount = wrapper.find('input').at(0);
    const currency1 = wrapper.find('input').at(1);
    const currency2 = wrapper.find('input').at(2);
    const changeCurrenciewValuesButton = wrapper.find('button').at(0);

    amount.instance().value = mockedAmount;
    amount.simulate('change');

    currency1.instance().value = mockedCurrency1;
    currency1.simulate('change');

    currency2.instance().value = mockedCurrency2;
    currency2.simulate('change');

    changeCurrenciewValuesButton.simulate('click');

    expect(currency1.instance().value).toEqual(mockedCurrency2);
    expect(currency2.instance().value).toEqual(mockedCurrency1);
  });
});
