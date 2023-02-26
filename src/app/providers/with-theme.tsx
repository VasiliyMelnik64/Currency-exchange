import { ThemeProvider } from 'styled-components';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themes } from '../config/themes';
import { GlobalStyles } from '../styles';
import { SiteFavIcon } from '../ui/site-fav-icon';
import { SiteTabTitle } from '../ui/site-tab-title';

type Props = {
  [key: string]: any;
};

export const withTheme =
  (Component: () => React.ReactElement) => (props: Props) =>
    (
      <ThemeProvider theme={themes.primary}>
        <SiteFavIcon />
        <SiteTabTitle />
        <GlobalStyles />
        <Component {...props} />
        <ToastContainer
          transition={Bounce}
          closeButton={false}
          className='ToastContainer'
          toastClassName='ToastInner'
        />
      </ThemeProvider>
    );
