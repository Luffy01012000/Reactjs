// import React, { useState } from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  // const [alertncol, setAlertcol] = useState(null);
  // let showAlert = (message, type) => {
  //   setAlertcol({
  //     msg: message,
  //     type: type,
  //   });
  // };
  // showAlert("hello","success");
  return (
    <div style={{height: '50px'}}>
    {//if props.alert is false then don't execute rest of the code otherwise do it.
    props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}{`\t`}</strong>
        {props.alert.msg}
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >click me</button> */}
      </div>}
      </div>    
  );
}

export default Alert;
