import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ToastProvider from './components/ToastProvider.jsx';
import { useTheme } from './hooks/useTheme.js';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <ToastProvider>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </ToastProvider>
    </Router>
  );
};

export default App;
