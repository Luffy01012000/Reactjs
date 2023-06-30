//rfc (react functional component)
import React, { useState } from "react";
//impt
import PropTypes from "prop-types";
import logo from "../logo.svg";
import "../App.css";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  // export default function BasicExample() {
    // const [props.mystyle, setprops.mystyle] = useState('light');
  

    // const [btnText, setBtnText] = useState("Enable Dark mode");
  
    // const toggleStyle = () => {
    //   if (props.mystyle === "light") {
    //     setprops.mystyle( "dark" );
    //     setBtnText("Enable Light mode");
    //   } else {
    //     setprops.mystyle("light");
    //     setBtnText("Enable Dark mode");
    //   }
    // };
  return (
    //    /*
    <>
    <div>
      {/* <header>
    
    </header> */}
      {/* <nav className="navbar navbar-expand-lg  bg-body-tertiary"> */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mystyle} bg-${props.mystyle}`}>
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <a className="navbar-brand" href="#">
            {props.title}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {/* <Link className="dropdown-item" to="/About">
                    About us
                  </Link> */}
                    <a className="dropdown-item" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    {/* <Link className="dropdown-item" to="/Alert">
                    Alert
                    </Link> */}
                    <a className="dropdown-item" href="#">
                      Alert
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {/* <Link className="dropdown-item" to="/403">
                      Something else here
                    </Link> */}
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mystyle==='light'?'dark':'light'} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault1"
                onClick={props.toggleStyle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault1"
              >
                {props.btnText}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
</>
    // */
  );
}

// Navbar.propTypes={title:PropTypes.string}
Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Set title here",
};
