import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '6rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h1 style={{ fontSize: '6rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '1rem', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{ padding: '0.75rem 1.5rem', backgroundColor: 'var(--accent-color)', color: '#fff', borderRadius: '6px', fontWeight: '600' }}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
