import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
import axios from "axios";

// const route = express.Router();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      items: [],
      showAddButton: false
    };
  }
 
  componentDidMount() {
    console.log('component did mount', localStorage)
    // this.showHide();
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

  // showHide = () => {
  //   const addBobbleId = document.getElementById('addFormId')
  //   if (localStorage.email) {
  //     this.state.showHide = true;
  //     if (this.state.showHide === true) {
  //       addBobbleId.style.display = 'inline';
  //     } 
  //   }
  //   else {
  //     addBobbleId.style.display = 'none';
  //   }
  // }

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
        console.log("Error PUT", err);
      })
    }

    registerUser = (newUser) => {
      console.log('new user', newUser);
      axios
      .post('auth/register', newUser)
      .then(userData => {
        console.log('auth data coming back', userData);
      })
      .catch(err => {
        console.log("Error register user", err);
      })
    }

    loginUser = (userData) => {
      console.log('new user', userData);
      axios
      .post('auth/login', userData)
      .then(userData => {
        const email = JSON.parse(userData.config.data).email
        console.log('email for auth login user', email)
        console.log('user data coming back', JSON.parse(userData.config.data).email);
        localStorage.setItem('email', email)
        this.setState({ showAddButton: true})
      })
      .catch(err => {
        console.log("Error login user", err);
      })
    }

    logoutUser = () => {
      console.log('App.js logoutUser Data CS fired!!!')
      axios
      .get('auth/logout')
      .then(logoutData => {
        console.log('logoutUser data coming back!!!\n', logoutData);
        localStorage.removeItem('email');
        this.setState({showAddButton: false});
      })
      .catch(err => {
        console.log('Error App.js logoutUser!!!!!\n', err)
      })
    }

    render() {
      return (
      <div className="App">
        <header className="App-header">
          <Header showAddButton={this.state.showAddButton} addBobbleToList={this.addBobbleToList} getBobbles={this.getBobbles} bobbles={this.state.items} deleteBobble={this.deleteBobbleFromList} editBobble={this.editItemInList} registerUser={this.registerUser} loginUser={this.loginUser} logoutUser={this.logoutUser}/>
        </header>
      </div>
    );
  }
}

export default App;
