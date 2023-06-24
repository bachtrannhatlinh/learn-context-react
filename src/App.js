import './App.css';
import ComponentB from './ComponentB';
import { useContext } from 'react';
import { ThemeContext } from './ContextGlobal';

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.handleTheme}>change color</button>
      <ComponentB />  
    </div>
  );
}

export default App;
