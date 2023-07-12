import React from 'react'

export default function Footer(props) {
  return (
    <div>
       <div className="container">
          {/* <img src={logo} className="App-bodylogo" alt="logo" /> */}
          <img src={props.log} className="App-bodylogo" alt="logo" />
          
          <p style={{color: props.mystyle==='light'?'#333':'#fff'}}>
            {/* Edit <code >src/App.js</code> */}
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
    </div>
  )
}
