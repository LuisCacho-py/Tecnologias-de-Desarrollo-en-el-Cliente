import React from 'react';

const About: React.FC = () => {
  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="title-gradient">Acerca de mí</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
        Soy estudiante de Ingeniería en Desarrollo de Software con fuerte interés y experiencia práctica en el desarrollo Full-Stack, bases de datos en la nube y el diseño de interfaces de usuario. Me apasiona construir aplicaciones web escalables y explorar soluciones innovadoras centradas en el usuario.
      </p>
    </section>
  );
};

export default About;
