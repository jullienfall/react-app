import React from 'react';

const Card = (props) => {
  return (
    <div className="card-container">
      <img width="75" src={props.avatar_url} alt="" />
      <div className="card-container__content">
        <div className="card-container__content--name">{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

export default Card;