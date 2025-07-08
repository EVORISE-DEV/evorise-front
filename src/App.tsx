// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouting } from './routes/App-Routing.tsx';
import 'primeicons/primeicons.css';


function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;
