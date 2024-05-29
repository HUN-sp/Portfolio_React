import './App.css';
import NavBar from './NavBar.js';
import TypeWriter from './TypeWriter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='typewriter-container'>
          <div className="fixed-name">
            <h3>Vinay Kumar Chopra</h3>
          </div>
          <TypeWriter
            text={[
              "Hello, I m vinay",
              "I m A software developer",
              "okay good bye"
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
