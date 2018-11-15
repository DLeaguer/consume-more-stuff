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


    deleteBobbleFromList = (id) => {
      axios
      .delete(`/deleteBobble/${id}`)
      .then( deleteResult => {
        console.log('deleteResult', deleteResult)
        this.setState({ items: deleteResult.data})
      })
      console.log('delete attempt')
    }

    editItemInList = (editItem, id) => {
      console.log('edit item id', id);
      console.log('editItem', editItem)
      axios
      .put(`/editBobble/${id}`, editItem)
      .then(editServerData => {
        this.setState({ items: editServerData.data })
      })
      .catch(err => {
        console.log("Error PUT/editTask:", err);
      })
    }

    redirectEdit = () => {
      
    }
    
    render() {
      // this.getBobbles()
      return (
      <div className="App">
        <header className="App-header">
          <Header addBobbleToList={this.addBobbleToList} getBobbles={this.getBobbles} bobbles={this.state.items} deleteBobble={this.deleteBobbleFromList} editBobble={this.editItemInList}/>
        </header>
      </div>
    );
  }
}

export default App;
