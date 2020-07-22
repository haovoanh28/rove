import React from "react";

import "./spinner.styles.css";
const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <div className="spinner_waiting_text">
        <p>Please wait a minute ... </p>
      </div>
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
