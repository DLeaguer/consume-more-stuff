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
 
  addBobbleToList = (item) => {
    console.log('addItemToList item', item)
    axios
    .post('/newBobble', item)
    .then( bobbleData => {
      console.log('bobble data from server', bobbleData)
      this.setState({ items: bobbleData.data})
    })
    .catch( err => {
      console.log('err', err)
    })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header addBobbleToList={this.addBobbleToList} />
        </header>
      </div>
    );
  }
}

export default App;
