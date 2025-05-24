import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <main className="mx-auto">
      <App />
    </main>
    <Footer />
  </StrictMode>
);
