import React from "react";
import ReactDOM from "react-dom";

const SubmitButton = props => {
    console.log('hello input', props);
  ReactDOM.render(
    <div key={props.Id}>
      <button type="submit" class="btn btn-primary">{ props.Label }</button>
    </div>,
    props.container
  )
}

export default SubmitButton;