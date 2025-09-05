import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx loaded');
console.log('Current URL:', window.location.href);
console.log('Base URL:', import.meta.env.BASE_URL);

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('React app rendered');
} else {
  console.error('Root element not found!');
}
