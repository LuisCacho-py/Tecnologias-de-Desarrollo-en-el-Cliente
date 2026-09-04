import React from 'react';

const Experience: React.FC = () => {
  const skills = [
    'JavaScript (Node.js)', 'Python', 'Java', 'C',
    'HTML/CSS', 'Express.js', 'REST API', 'MVC Architecture',
    'MongoDB Atlas', 'SQL Server', 'Git / GitHub', 'Docker',
    'Amazon Alexa SDK', 'UX/UI Research', 'Object-Oriented Design'
  ];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <h2 className="title-gradient">Habilidades y Certificaciones</h2>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Certificaciones</h3>
        <div style={{ borderLeft: '3px solid var(--accent-1)', paddingLeft: '1rem' }}>
          <h4 style={{ color: 'var(--accent-1)', marginBottom: '0.25rem' }}>Oracle ONE Program - Data Analysis Track</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Alura Latam | Sept 2025 - Feb 2026</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Programa integral cubriendo fundamentos de análisis de datos, SQL, Python, herramientas BI y storytelling con datos.
          </p>
        </div>
      </div>

      <div>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Habilidades Técnicas</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {skills.map((skill, idx) => (
            <span key={idx} style={{
              background: 'rgba(221, 218, 208, 0.6)',
              color: 'var(--text-primary)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              border: '1px solid rgba(122, 122, 115, 0.3)'
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
