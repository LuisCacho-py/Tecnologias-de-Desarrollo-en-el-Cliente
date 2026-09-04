import React from 'react';

const Hobbies: React.FC = () => {
  const languages = ['Español (Nativo)', 'Inglés (Intermedio B2)'];
  const hobbies = ['Desarrollo de Software', 'UX/UI Design', 'Investigación en IA', 'Análisis de Datos'];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '1s' }}>
      <h2 className="title-gradient">Idiomas e Intereses</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Idiomas</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {languages.map((lang, idx) => (
              <li key={idx} style={{
                background: 'var(--surface-color)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)'
              }}>
                {lang}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Intereses</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {hobbies.map((hobby, idx) => (
              <li key={idx} style={{
                background: 'var(--surface-color)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)'
              }}>
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
