import { FC, PropsWithChildren, createContext, 
  useContext as _useContext, } from 'react';

import Filter from './Filter';

const cProvider = createContext<null>(null);
export const useFilterContext = () => _useContext(cProvider);

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <cProvider.Provider value={null}>
    <Filter>
      {children}
    </Filter>
  </cProvider.Provider>
);

export default Provider;