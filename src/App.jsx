import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ToastProvider from './components/Toast/ToastProvider';
import { useTheme } from './hooks/useTheme';

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
