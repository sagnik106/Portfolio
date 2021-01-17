import Name from './components/Name.js';
import Scrollarrow from './components/Scrollarrow.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js'
import './App.css';

function App() {
  return (
    <div>
      <Name/>
      <Scrollarrow link="/#About"/>
      <About/>
      <Scrollarrow link="/#Skills"/>
      <Skills/>
      <Scrollarrow link="/#Education"/>
      <Education/>
      <Scrollarrow link="/#Experience"/>
      <Experience/>
      <Scrollarrow link="/#Contact"/>
      <Contact/>
    </div>
  );
}

export default App;
