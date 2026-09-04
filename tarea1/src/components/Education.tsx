import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <h2 className="title-gradient">Educación</h2>
      <div style={{ marginTop: '2rem' }}>
        <div style={{
            borderLeft: '4px solid var(--accent-1)',
            paddingLeft: '1.5rem',
            marginBottom: '2rem'
        }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>B.S. in Software Development Engineering</h3>
          <p style={{ color: 'var(--accent-2)', fontWeight: 600, marginBottom: '0.5rem' }}>
            Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Tlaquepaque, Jal. | Agosto 2023 - Presente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
