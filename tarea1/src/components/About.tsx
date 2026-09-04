import React from 'react';

const About: React.FC = () => {
  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="title-gradient">Acerca de mí</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
        Soy un estudiante y desarrollador enfocado en el Front-End, explorando siempre las mejores tecnologías y prácticas para la construcción de interfaces de usuario modernas.
        Me encanta aprender cosas nuevas, superar retos y mejorar constantemente mis habilidades.
        Mi objetivo es desarrollar aplicaciones rápidas, accesibles y estéticamente agradables.
      </p>
    </section>
  );
};

export default About;
