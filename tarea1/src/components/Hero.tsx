import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
        Hola, soy <span className="title-gradient">Luis Gerardo Cacho</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Software Development Engineering Student
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://github.com/LuisCacho-py" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--surface-color)', color: 'var(--text-primary)' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luis-cacho" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--surface-color)', color: 'var(--text-primary)' }}>
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
