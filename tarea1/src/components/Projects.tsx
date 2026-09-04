import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    { 
      title: 'MoonBloom - Women\'s Health', 
      description: 'Arquitectura de aplicación web full-stack para el seguimiento de la salud femenina. Backend RESTful en Express.js integrado con MongoDB Atlas.',
      tech: 'Node.js | Express.js | MongoDB Atlas'
    },
    { 
      title: 'Nutritabla - Amazon Alexa Skill', 
      description: 'Diseño y despliegue de una skill de Alexa para consultar equivalencias nutricionales mediante comandos de voz en lenguaje natural.',
      tech: 'Amazon Alexa SDK | VUI | DynamoDB'
    },
    { 
      title: 'Studio 404 - Social Network', 
      description: 'Red social full-stack con perfiles, hilos de comentarios y subida de archivos multimedia. Esquema escalable modelado con Mongoose.',
      tech: 'Node.js | Socket.IO | MongoDB Atlas'
    },
    { 
      title: 'AI-Powered Personal Diary', 
      description: 'Investigación UX/UI y diseño de prototipos para una app de salud mental con detección de crisis impulsada por IA.',
      tech: 'Figma | UX Research | Prototyping'
    }
  ];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="title-gradient">Proyectos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {projectList.map((project, idx) => (
          <div key={idx} style={{
            background: 'var(--surface-color)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.description}</p>
            </div>
            <p style={{ color: 'var(--accent-1)', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
