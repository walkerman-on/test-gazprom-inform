import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from 'app/providers/counter-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CounterProvider>
    <App />
  </CounterProvider>
);

