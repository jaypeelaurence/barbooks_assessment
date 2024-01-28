import { FC } from 'react';

import { toast, ToastT } from 'sonner';
import { TOAST_TYPE } from 'utils/constants';


export type PROPS = {
  message: string
  title: string
  type: TOAST_TYPE,
}

const callToast = (
  message = '',
  title = 'Success',
  position: ToastT['position'] = 'top-right',
  type: PROPS['type'] = 'success',
) => toast.custom(() => <Toast title={title} message={message} type={type} />,
{ position });

export const toastSuccess = (message = '', title = 'Success',
  position: ToastT['position'] = 'top-right') =>
  callToast(message, title, position, 'success');

export const toastError = (message = '', title = 'Error',
  position: ToastT['position'] = 'top-right') =>
  callToast(message, title, position, 'error');

export const toastInfo = (message = '', title = 'Info',
  position: ToastT['position'] = 'top-right') =>
  callToast(message, title, position, 'info');

export const toastWarning = (message = '', title = 'Warning',
  position: ToastT['position'] = 'top-right') =>
  callToast(message, title, position, 'warning');

export const toastDefault = (message = '', title = 'Default',
  position: ToastT['position'] = 'top-right') =>
  callToast(message, title, position, 'default');

const Toast: FC<PROPS> = ({ message, title }) => (
  <div>
    <h1>
      {title}
    </h1>
    <p>
      {message}
    </p>
  </div>
);

export default Toast;