import React, { useState } from 'react';
import { useToast } from '../../hooks/useToast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please fill out all fields', 'error');
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      addToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
          <input 
            id="name"
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
          <input 
            id="email"
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
          <textarea 
            id="message"
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }}
          ></textarea>
        </div>
        <button 
          type="submit" 
          style={{ padding: '0.75rem 1.5rem', backgroundColor: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', marginTop: '1rem' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
