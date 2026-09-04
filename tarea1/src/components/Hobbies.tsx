import React from 'react';

const Hobbies: React.FC = () => {
  const hobbies = ['Programación', 'Lectura sobre Tecnología', 'Videojuegos', 'Deportes / Ejercicio'];

  return (
    <section className="glass-card animate-fade-in" style={{ animationDelay: '1s' }}>
      <h2 className="title-gradient">Hobbies e Intereses</h2>
      <ul style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {hobbies.map((hobby, idx) => (
          <li key={idx} style={{
            background: 'var(--surface-color)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--glass-border)',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
