import React, { Component } from 'react';
import Form from './form';
import CardList from './card-list';

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
      </div>
    )
  }
}

export default App;