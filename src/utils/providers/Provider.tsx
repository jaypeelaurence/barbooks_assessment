/* eslint-disable no-unused-vars */

import {
  createContext,
  useContext as _useContext,
  FC,
  PropsWithChildren,
  useReducer,
  useMemo,
} from 'react';

import { toastDefault, toastError } from 'ui/partials/Toast';
import { ERROR_STATUS_CODES } from 'utils/constants';

type ERROR = {
  status: ERROR_STATUS_CODES;
  data?: {
    message?: string | string[];
  };
  [key: string]: any;
};

interface DISPATCH_ERROR {
  [key: keyof ERROR]: any;
}

interface STATE {
  onError: (err: ERROR) => any;
}

const initialState: STATE = {
  onError: (err: ERROR) => {
    try {
      const dispatchError: DISPATCH_ERROR = {
        404: () => {
          const message = err?.data?.message;
          toastError(message as string);
        },
        429: () => {
          const message = err?.data?.message;
          toastError(message as string);
        },
        500: () => {
          const message = err?.data?.message;
          toastError(message as string);
        },
      };

      return dispatchError[err.status] ? dispatchError[err.status]()
        : toastDefault('Unable to Communicate to server');
    } catch (error) {
      return toastDefault('Unable to Communicate to server');
    }
  },
};

interface DISPATCH_REDUCER {
  payload: any;
}

const Reducer = (state: STATE) => state;

interface PROVIDER {
  state: STATE;
  dispatch?: React.Dispatch<DISPATCH_REDUCER>;
}

const cProvider = createContext({});
export const useProvider = () => _useContext(cProvider) as PROVIDER;

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <cProvider.Provider value={value}>{children}</cProvider.Provider>;
};

export default Provider;
