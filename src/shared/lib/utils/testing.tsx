import { mount, shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

import { withProviders } from 'app/providers';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve([])),
    create: jest.fn(() => Promise.resolve({})),
  };
});

export const Wrapper = (component: any) => {
  const RenderedComponent = withProviders(component);

  const wrapper = mount(shallow(<RenderedComponent />).get(0));

  return wrapper;
};

export const getInnerHTML = (htmlNode) =>
  htmlNode
    .children()
    .reduce((str, htmlNode) => str + htmlNode.html() || htmlNode.text(), '');
