import React, { Component } from 'react';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './numbers';

class Game extends Component {
  state = {
    selectedNumbers: [],
    numberOfStars: 1+ Math.floor(Math.random()*9),
  };
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }

  render() {
    const {selectedNumbers, numberOfStars} = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row center-xs">
          <Stars stars={numberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers} 
            unselectNumber={this.unselectNumber}
          />
        </div>
        <hr/>
        <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} />
      </div>
    )
  }  
}

export default Game;