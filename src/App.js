import React from 'react';
import './styles/styles.css';
import Header from "./Components/Header";
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
