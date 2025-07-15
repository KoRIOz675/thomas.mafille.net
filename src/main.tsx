import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import { SettingsProvider } from './context/SettingsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <Header />
        <main className="mx-auto bg-white">
          <App />
        </main>
        <Footer />
      </BrowserRouter>
    </SettingsProvider>
  </StrictMode>
);
