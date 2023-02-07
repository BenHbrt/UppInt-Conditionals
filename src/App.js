import './App.scss';
import { useState } from 'react'
import initialScores from './data/InitialScores';

function App() {

  const [sectionScores, setSectionScores] = useState(initialScores)
  return (
    <div className="App">
      <h1>Upper-Intermediate Conditionals</h1>
      <div className="menu">
        {
          sectionScores.map((item) => {
            return <div className="menu_option">
              <span>{item.conditional}</span>
              {item.score === 0 ? <span>try</span> : <span>{item.score}</span>}
              </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
