import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Provider from 'utils/providers/index.ts';

import App from './App.tsx';
import 'assets/styles/index.css';
import 'assets/styles/index.css';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <Toaster />
      <App />
    </Provider>
  </QueryClientProvider>,
);
