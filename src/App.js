import React, { Component } from 'react';

import Form from './cards/form';
import CardList from './cards/card-list';
import Game from './game/js/game';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
        <Game />
      </div>
    )
  }
}

export default App;