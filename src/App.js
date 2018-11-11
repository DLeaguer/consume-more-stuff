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
 
  componentDidMount() {
    console.log('component did mount')
    axios
      .get('/bobbles')
      .then( items => {
        // console.log('items DB', items)
        this.setState({items: items.data})
      })
      .catch( err => {
        console.log('err')
      })
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
      // this.getBobbles()
      return (
      <div className="App">
        <header className="App-header">
          <Header addBobbleToList={this.addBobbleToList} getBobbles={this.getBobbles} bobbles={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App;
