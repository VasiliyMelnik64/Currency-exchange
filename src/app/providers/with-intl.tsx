import { IntlProvider } from 'react-intl';

import enConfig from 'app/config/locales/en.json';
import nlConfig from 'app/config/locales/nl.json';

type TranslationsType = {
  [key: string]: any;
};

const messages: TranslationsType = {
  en: enConfig,
  nl: nlConfig,
};

const language = window.navigator.language.split(/[-_]/)[0];

type Props = {
  [key: string]: any;
};

export const withIntl =
  (Component: () => React.ReactElement) => (props: Props) =>
    (
      <IntlProvider locale={language} messages={messages[language] || enConfig}>
        <Component {...props} />
      </IntlProvider>
    );
