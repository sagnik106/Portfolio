import Name from './components/Name.js';
import Scrollarrow from './components/Scrollarrow.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js'
import './App.css';

function App() {
  var base = "/Portfolio/";
  return (
    <div>
      <Name/>
      <Scrollarrow link={base+"#About"} link1={base+"#start"} up={false} down={true}/>
      <About/>
      <Scrollarrow link={base+"#Skills"} link1={base+"#start"} up={true} down={true}/>
      <Skills/>
      <Scrollarrow link={base+"#Education"} link1={base+"#About"} up={true} down={true}/>
      <Education/>
      <Scrollarrow link={base+"#Experience"} link1={base+"#Skills"} up={true} down={true}/>
      <Experience/>
      <Scrollarrow link={base+"#Contact"} link1={base+"#Education"} up={true} down={true}/>
      <Contact/>
      <Scrollarrow link={base+"#Contact"} link1={base+"#Experience"} up={true} down={false}/>
    </div>
  );
}

export default App;
