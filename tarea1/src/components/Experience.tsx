import React from 'react';

const Experience: React.FC = () => {
  const skills = ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Git & GitHub'];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <h2 className="title-gradient">Tecnologías y Experiencia</h2>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)' }}>Experiencia Profesional / Proyectos</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Actualmente desarrollando proyectos académicos e independientes, aplicando mejores prácticas de UI/UX, arquitectura de componentes en React y control de versiones con Git.
        </p>
      </div>
      <div>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Habilidades Clave</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {skills.map((skill, idx) => (
            <span key={idx} style={{
              background: 'rgba(59, 130, 246, 0.2)',
              color: 'var(--accent-2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
