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
      <Scrollarrow link="/Portfolio/#About"/>
      <About/>
      <Scrollarrow link="/Portfolio/#Skills"/>
      <Skills/>
      <Scrollarrow link="/Portfolio/#Education"/>
      <Education/>
      <Scrollarrow link="/Portfolio/#Experience"/>
      <Experience/>
      <Scrollarrow link="/Portfolio/#Contact"/>
      <Contact/>
    </div>
  );
}

export default App;
