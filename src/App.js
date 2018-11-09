import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      bobbles: [
        {
          id: 1,
          title: "President Obama",
          description: "Prez Obama bobble head",
          price: 15,
          image: "https://papundits.files.wordpress.com/2011/08/obama-bobblehead.gif",
          condition: "Excellent",
          category: "Presidents",
          status: true
        },
        {
          id: 2,
          title: "Michael Jackson",
          description: "Michael Jackson bobble head",
          price: 10,
          image: "http://blog.swagbucks.com/wp-content/uploads/2012/02/71o-800ojqL._AA1500_.jpg",
          condition: "Good",
          category: "Singers",
          status: true
        },
        {
          id: 3,
          title: "Angelina Jolie",
          description: "Maleficent bobble head",
          price: 12,
          image: "https://experiencethemistress.com/wp-content/uploads/2016/06/2014-Funko-Maleficent-Movie-Wacky-Wobbler-Bobble-Head-Vinyl-Figure-Unreleased-Prototype-002.jpg",
          condition: "Poor",
          category: "Actors",
          status: true
        },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
