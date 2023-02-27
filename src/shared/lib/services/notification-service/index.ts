import { toast, ToastOptions } from 'react-toastify';

const defaultConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

type ConfigType = { [key: string]: any };

export const notifications = {
  config: defaultConfig,
  error(message: string, config?: ConfigType): void {
    toast.error(message, {
      ...this.config,
      ...config,
    });
  },
  warning(message: string, config?: ConfigType) {
    toast.warning(message, {
      ...this.config,
      ...config,
    });
  },
  success(message: string, config?: ConfigType) {
    toast.success(message, {
      ...this.config,
      ...config,
    });
  },
};
