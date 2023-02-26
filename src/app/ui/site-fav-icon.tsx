import { useEffect, memo } from 'react';

export const SiteFavIcon = memo(() => {
  useEffect(() => {
    const favicon: any = document.getElementById('favicon');

    if (favicon) {
      favicon.href = '/static/favicon.ico';
    }
  }, []);

  return null;
});
