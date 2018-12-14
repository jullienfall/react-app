import React, { Component } from 'react';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './numbers';
import DoneFrame from './doneFrame';
import { possibleCombinationSum } from './possibleCombinationSum';
import _ from 'lodash';

class Game extends Component {
  static randomNumber = () => 1+ Math.floor(Math.random()*9);
  static initialState = () => ({
    selectedNumbers: [],
    numberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null,
  });
  state = Game.initialState();
  resetGame = () => this.setState(Game.initialState());
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  };
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus);
  };
  redraw = () => {
    if(this.state.redraws === 0) return;
    this.setState(prevState => ({
      numberOfStars: Game.randomNumber(),
      selectedNumbers: [],
      answerIsCorrect: null,
      redraws: prevState.redraws - 1,
    }), this.updateDoneStatus);
  };
  possibleSolution = ({numberOfStars, usedNumbers}) => {
    const possibleNumbers = _.range(1, 10).filter(number =>
      usedNumbers.indexOf(number) === -1
    );
    return possibleCombinationSum(possibleNumbers, numberOfStars);
  };
  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return {doneStatus: 'Done. Nice!'}
      }
      if (prevState.redraws === 0 && !this.possibleSolution(prevState)) {
        return {doneStatus: 'Game Over!'};
      }
    });
  };

  render() {
    const {selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers, redraws, doneStatus} = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row center-xs">
          <Stars stars={numberOfStars} />
          <Button selectedNumbers={selectedNumbers}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws} />
          <Answer selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <hr/>

        {doneStatus ?
          <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} /> :
          <Numbers selectedNumbers={selectedNumbers}
                selectNumber={this.selectNumber}
                usedNumbers={usedNumbers} />}
      </div>
    )
  }
}

export default Game;
