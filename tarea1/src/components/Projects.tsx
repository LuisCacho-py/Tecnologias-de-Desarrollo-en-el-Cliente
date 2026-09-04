import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    { title: 'Portfolio SPA', description: 'Curriculum en línea desarrollado con React y Vite.' },
    { title: 'E-commerce App', description: 'Aplicación de compras con integración de carrito y pagos simulados.' },
    { title: 'Dashboard', description: 'Panel de administración utilizando gráficas dinámicas y un diseño Dark Mode.' }
  ];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="title-gradient">Proyectos Destacados</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {projectList.map((project, idx) => (
          <div key={idx} style={{
            background: 'var(--surface-color)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)'
          }}>
            <h3 style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
