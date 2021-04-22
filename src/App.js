import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import profilePic from './assets/aboutme.jpg';

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" fill="#ffffff"/> */}

        <div class="profile-icon">
                <img src={profilePic} />
        </div>

        <h1>Hello World!</h1>
        <p>
          Bing bong I'm slowly making a website here
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
