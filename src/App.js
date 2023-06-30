import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Footer from "./components/Footer";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="Demo" /> {/*function */}
        {/* <Navbar/> */}
        <div className="container">
          <Textform heading="Enter text below to Analyze.." />
        </div>
        <div className="container">
          <img src={logo} className="App-bodylogo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div className="container">
          <Darkmode/>
        </div>
      </header>
      
      
      <footer className="App-footer">
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
