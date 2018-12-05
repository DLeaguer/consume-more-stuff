import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { isNull } from 'util';
// import axios from "axios";

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email: null,
        password: null
      }
      console.log('Register props', props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted!', this.state)
        this.props.loginUser(this.state)

    }
    
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    
    render() {
      console.log('login form is re-rendering')
        return (
          <div className="loginPage">
            <h1>
              Login Page
            </h1>
            <div className="loginContainer">
              <form onSubmit={this.handleSubmit}>
                <br/>
                  <label> Email: <br/> <input onChange={this.handleChange} type='text' name='email' placeholder='email'></input>
                  </label>
                  <br/>
                  <label> Password: <br/> <input onChange={this.handleChange} type='text' name='password' placeholder='password'></input>
                  </label> <br/>
                  <button type='submit'>Login</button>
              </form>
            </div>
          </div>
      )
    }
  }
  
  export default Login;