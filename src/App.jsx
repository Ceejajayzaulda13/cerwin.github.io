import { useState } from 'react';
import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Skill />
      <Contact />
    
    </div>
  );
}

export default App;
