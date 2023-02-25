import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {
  [key: string]: any;
};

export const withRouter =
  (Component: () => React.ReactElement) => (props: Props) =>
    (
      <Router>
        <Suspense fallback={null}>
          <Component {...props} />
        </Suspense>
      </Router>
    );
