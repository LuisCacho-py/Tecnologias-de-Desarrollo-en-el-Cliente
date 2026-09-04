import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <main className="container">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Hobbies />
      <ContactForm />
    </main>
  );
};

export default App;
