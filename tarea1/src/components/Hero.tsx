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
    </section>
  );
};

export default Hero;
