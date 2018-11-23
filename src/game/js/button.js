import React from 'react';

const Button = (props) => {
  return (
    <div className="col-2 text-center">
      <button disabled={props.selectedNumbers.length === 0} className="btn">=</button>
    </div>
  )
}

export default Button;