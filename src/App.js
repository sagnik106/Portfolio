import Name from './components/Name.js'
import Scrollarrow from './components/Scrollarrow.js'
import About from './components/About.js'
import './App.css';

function App() {
  return (
    <div>
      <Name/>
      <Scrollarrow link="/#About"/>
      <About/>
      <Scrollarrow link="/#Skills"/>
    </div>
  );
}

export default App;
