import { getCurrencyError } from 'entities/currency/model/currency-slice';
import { ActionErrorType } from 'entities/currency/lib/types';
import { notifications } from '../../lib/services/notification-service';

export const errorMiddleware =
  () =>
  (next: (action: ActionErrorType) => void) =>
  (action: any): void => {
    const errors = [getCurrencyError(action).type]; // add new error types here

    if (errors.includes(action.type)) {
      notifications.error(action?.payload?.message);
    }

    next(action);
  };
