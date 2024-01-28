import { FC, PropsWithChildren, 
  createContext,
  useContext as _useContext,
  useReducer,
  useMemo, } from 'react';

interface FILTER {
  [key: string]: any;
}

interface DISPATCH_REDUCER {
  payload: FILTER;
}
  
interface PROVIDER {
  state: FILTER;
  dispatch?: React.Dispatch<DISPATCH_REDUCER>;
}

const initialState = {};

const cFilter = createContext<FILTER>({});

export const useFilterContext = () => _useContext(cFilter) as PROVIDER;

const Reducer = (_state: FILTER, { payload }: DISPATCH_REDUCER) => payload;

const Filter: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <cFilter.Provider value={value}>{children}</cFilter.Provider>
  );
};

export default Filter;