import compose from 'compose-function';
import { withRouter } from './with-router';
import { withStore } from './with-store';
import { withIntl } from './with-intl';
import { withTheme } from './with-theme';

export const withProviders = compose(
  withRouter,
  withStore,
  withIntl,
  withTheme
);
