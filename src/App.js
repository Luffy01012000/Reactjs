import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform.jsx";
import Footer from "./components/Footer";
import Darkmode from "./components/Darkmode";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

function App() {
  const [mystyle, setMyStyle] = useState('light');
  

  const [btnText, setBtnText] = useState("Enable Dark mode");

  const toggleStyle = () => {
    if (mystyle === "light") {
      setMyStyle("dark");
      setBtnText("Enable Light mode");
      // document.body.style.backgroundColor="#414141"
      document.body.style.backgroundColor="#1e1f1f"
      // document.body.style.backgroundColor="#212529"
      showAlert("Dark mode","success");
    } else {
      setMyStyle( "light" );
      setBtnText("Enable Dark mode");
      document.body.style.backgroundColor="#fff"
      showAlert("Light mode","success");
    }
  };

  //alert
 
  const [alertncol, setAlertcol] = useState(null);
  let showAlert = (message, type) => {
    setAlertcol({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertcol(null);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar title="Demo" mystyle={mystyle} btnText={btnText} toggleStyle={toggleStyle} /> 
          {/* <Navbar title="Demo" />  */}
      <Alert alert={alertncol}/>
          {/* function */}
          {/* <Navbar/> */}
          {/* <div className="container">
        <Textform heading="Enter text below to Analyze.." mystyle={mystyle} showAlert={showAlert}/>
        </div> */}

          {/* <div className="container"> */}
          {/* <Router> */}
          {/* <Routes path="/" element={<Navbar title="Demo" />}> */}
          <Routes>
            {/* <Route path="/" element={<Navbar title="Demo" />} /> */}

            <Route
              path="/"
              element={ <Textform heading="Enter text below to Analyze.." mystyle={mystyle} showAlert={showAlert}/>}
              />
              {/* </Route> */}
            <Route path="/About" element={<Darkmode mystyle={mystyle}/>} />
            <Route path="/403" element="403" />
            <Route path="*" element="404" />
            {/* <Route path="Alert" element={<Alert alert={alertncol}/>} /> */}
            {/* <Darkmode /> */}
            {/* <Alert alert="success" /> */}
          </Routes>
        {/* </div> */}
        </Router>
      </header>

      <footer className="App-footer">
        <Footer log={logo} mystyle={mystyle}/>
      </footer>
    </div>
  );
}

export default App;
