import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  let button;
  switch(props.answerIsCorrect) {
    case true:
      button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                <FontAwesomeIcon icon="check" />
              </button>;
      break;
    case false:
      button = <button className="btn btn-danger"><FontAwesomeIcon icon="times" /></button>;
      break;
    default:
      button = <button disabled={props.selectedNumbers.length === 0} className="btn"
                      onClick={props.checkAnswer}>
                <FontAwesomeIcon icon="equals" />
              </button>;
      break;
  }
  return (
    <div className="col-2 text-center">
      {button}
      <button className="btn btn-warning" onClick={props.redraw}
              disabled={props.redraws === 0}>
        <FontAwesomeIcon icon="sync-alt" />
        {props.redraws}
      </button>
    </div>
  )
}

export default Button;
