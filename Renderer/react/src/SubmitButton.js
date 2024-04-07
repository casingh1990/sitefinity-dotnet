import React from "react";
import ReactDOM from "react-dom";

const SubmitButton = props => {
    console.log('hello input', props);
  ReactDOM.render(
    <div key={props.Id}>
      <input type="button" onClick="console.log('button was clicked')" />
    </div>,
    props.container
  )
}

export default SubmitButton;