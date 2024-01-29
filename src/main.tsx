import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Provider from 'utils/providers/index.ts';

import App from './App.tsx';
import 'assets/styles/style.module.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
    <Provider>
      <Toaster />
      <App />
    </Provider>
  </QueryClientProvider>,
);
