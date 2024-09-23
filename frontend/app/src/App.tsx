import { Works } from './Works';
import { FirstView } from './FirstView'
import { About } from './About'
import { Skill } from './Skill'

function App() {
  return (
    // <div style={{ marginTop: '64px' }}>
    <div style={{marginBottom: '64px'}}>
      <FirstView />
      <About />
      <Skill />
      <Works/>
    </div>
  );
}

export default App;
