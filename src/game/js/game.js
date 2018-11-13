import React, { Component } from 'react';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './numbers';

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    )
  }  
}

export default Game;