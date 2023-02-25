import { useEffect, useRef, memo } from 'react';
import { useIntl, IntlShape } from 'react-intl';

export const SiteTabTitle = memo(() => {
  const intlRef = useRef<IntlShape>();
  const intl = useIntl();

  intlRef.current = intl;

  useEffect(() => {
    if (intlRef.current) {
      document.title = intlRef.current.formatMessage({ id: 'home.tab.title' });
    }
  }, []);

  return null;
});
