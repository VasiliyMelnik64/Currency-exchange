import { Provider } from 'react-redux';
import { store } from '../store';

type Props = {
  [key: string]: any;
};

export const withStore =
  (Component: () => React.ReactElement) => (props: Props) =>
    (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
