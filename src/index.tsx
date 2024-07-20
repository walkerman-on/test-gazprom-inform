import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from 'app/providers/counter-provider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
  </BrowserRouter>
);

