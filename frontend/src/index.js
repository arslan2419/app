import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from './components/ui/sonner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'rgb(15 23 42 / 0.9)',
          color: '#fff',
          border: '1px solid rgb(99 102 241 / 0.3)',
          backdropFilter: 'blur(12px)'
        }
      }}
    />
  </React.StrictMode>
);
