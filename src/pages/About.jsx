import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Us</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
        We are a forward-thinking technology company dedicated to building the best SaaS products for our customers.
        Our mission is to simplify complex workflows and empower teams to achieve more.
      </p>
    </div>
  );
};

export default About;
