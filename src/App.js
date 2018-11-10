import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      items: []
    };
  }
  addItemToList = (item) => {
    console.log('addItemToList item', item)
    axios
    .post('/newCard', item)
    .then( cardData => {
      console.log('card data from server', cardData)
      this.setState({ items: cardData.data})
    })
    .catch( err => {
      console.log('err', err)
    })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header addForm={this.addItemToList} />
        </header>
      </div>
    );
  }
}

export default App;
