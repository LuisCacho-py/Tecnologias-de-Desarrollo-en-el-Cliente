import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--- Datos del Formulario de Contacto ---');
    console.log('Nombre:', formData.name);
    console.log('Correo:', formData.email);
    console.log('Mensaje:', formData.message);
    console.log('----------------------------------------');
    setIsSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    fontSize: '1rem'
  };

  return (
    <section id="contact" className="glass-card animate-fade-in" style={{ animationDelay: '1.2s' }}>
      <h2 className="title-gradient">Contacto</h2>
      
      {isSubmitted ? (
        <div style={{
          background: 'rgba(123, 150, 105, 0.2)',
          border: '1px solid var(--accent-1)',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--accent-1)', marginBottom: '1rem' }}>¡Mensaje enviado con éxito!</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Gracias por contactarme, {formData.name}. Revisa la consola para ver los datos que llenaste.
          </p>
          <button 
            className="btn" 
            style={{ marginTop: '1.5rem' }}
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', message: '' });
            }}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              required
            />
          </div>
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Enviar Mensaje
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
