import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store';

type Props = {
  [key: string]: any;
};

export const withStore =
  (Component: () => React.ReactElement) => (props: Props) =>
    (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    );
