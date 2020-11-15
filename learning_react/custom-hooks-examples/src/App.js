import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter';
import {Home} from './Home';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(true);

  const switcher = () => {
    setState((prev) => !prev)
  }


  return (
    <div className="App">
      <button onClick={() => switcher()}>Simple switcher</button>
      {
        state ? <Counter /> : <Home />
      }
      
    </div>
  );
}

export default App;
