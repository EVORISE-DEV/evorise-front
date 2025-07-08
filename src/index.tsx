import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importando App do arquivo
import '../src/index.css';


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

