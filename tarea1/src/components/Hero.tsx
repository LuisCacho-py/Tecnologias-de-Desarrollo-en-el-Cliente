import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
        Hola, soy <span className="title-gradient">Luis</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Desarrollador Front-End apasionado por crear experiencias web increíbles.
      </p>
      <a href="#contact" className="btn">
        Contáctame
      </a>
    </section>
  );
};

export default Hero;
