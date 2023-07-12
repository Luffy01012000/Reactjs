import React, { useState } from "react";

export default function Darkmode(props) {
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  

  const [btnText, setBtnText] = useState("Enable Dark mode");
  const [btnmsg, setBtnMsg] = useState("hide button");
  const [togbtnmsg, settoggBtnMsg] = useState({
    display: "block"
  });

  const togglebtn=()=>{
    if(btnmsg ==="hide button"){
      settoggBtnMsg({display: "none"})
      setBtnMsg("show button");
      // let h= document.getElementById('hidebtn');
      // h.style.display = "none";
      //  var h= document.getElementById('hidebtn');
        // h.style.display = "none";
    }else{
      settoggBtnMsg({display: "block"})
      // let h= document.getElementById('hidebtn');
        // h.style.display = "block";
        setBtnMsg("hide button");
    }
  }

  const toggleStyle = () => {
    if (mystyle.color === "white") {
      setMyStyle({ color: "black", backgroundColor: "white" });
      setBtnText("Enable Dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        // border: "1px solid white"
      });
      setBtnText("Enable Light mode");
    }
  };
 
  return (
    <>
      <div className="container my-3" style={mystyle}>
        <h1>About US</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={toggleStyle}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault1"
          />
          {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">
          {btnText}
          </label> */}
          <button className="btn btn-primary" onClick={toggleStyle}>
            {btnText}
          </button>
        </div>
      </div>
          {/* <button className="btn btn-primary" onClick={toggleStyle}>
            {btnText}
          </button> */}
      <div className="container" id="hidebtn" >
      <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={togglebtn}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={togbtnmsg}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mystyle==='light'?'#333':'#fff'}}>
          {btnmsg}
          </label>
        </div>
        </div>
    </>
  );
}
