import React from 'react';
import Card from './card';

const CardList = (props) => {
  return (
    <div className="container">
      {props.cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  )
}

export default CardList;