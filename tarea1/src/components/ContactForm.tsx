import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    setIsSubmitted(true);
  };

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '1s' }}>
      <h2 className="title-gradient">Contacto</h2>
      
      {isSubmitted ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--accent-1)' }}>
          <h3>¡Mensaje enviado con éxito!</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Gracias por contactarme, me comunicaré contigo pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ color: 'var(--text-primary)' }}>Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: 'rgba(0,0,0,0.2)', color: 'white' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ color: 'var(--text-primary)' }}>Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: 'rgba(0,0,0,0.2)', color: 'white' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ color: 'var(--text-primary)' }}>Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
              rows={4}
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: 'rgba(0,0,0,0.2)', color: 'white', resize: 'vertical' }}
            ></textarea>
          </div>
          <button 
            type="submit" 
            style={{ 
              marginTop: '1rem', 
              padding: '0.75rem 1.5rem', 
              background: 'linear-gradient(90deg, var(--accent-1) 0%, var(--accent-2) 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
