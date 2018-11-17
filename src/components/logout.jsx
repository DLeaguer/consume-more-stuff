import React from 'react'

function Logout(props) {
  console.log('Home props', props)
  return (
    <div>
      <div>
        <button onClick={props.logoutUser}>Logout</button>
        {/* <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img  className='homeImg' src={require('../BobbleBay.png')} alt="BobbleBay" /></a> */}
      </div>
    </div>
  )
}

export default Logout;









// import React, { Component } from 'react';
// // import { connect } from 'react-redux';
// // import { isNull } from 'util';
// // import axios from "axios";

// class Logout extends Component {
//     constructor(props) {
//       super(props)
//       // this.state = {
//       //   email: null,
//       //   password: null
//       // }
//       console.log('Register props!!! \n', props)
//     }

    

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('submitted!', this.state)
//         this.props.logoutUser()
//     }
    
//     handleChange = (e) => {
//         e.preventDefault()
//         const { name, value } = e.target
//         this.setState({
//             [name] : value
//         })
//     }
    
//     render() {
//         return (
//           <div className="loginPage">
//             <h1>
//               Logout Page
//             </h1>
//             <div className="loginContainer">
//               <form onSubmit={this.handleSubmit}>
//                 <br/>
//                   {/* <label> Email: <br/> <input onChange={this.handleChange} type='text' name='email' placeholder='email'></input>
//                   </label>
//                   <br/>
//                   <label> Password: <br/> <input onChange={this.handleChange} type='text' name='password' placeholder='password'></input>
//                   </label> <br/> */}
//                   <button type='submit'>Logout</button>
//               </form>
//             </div>
//           </div>
//       )
//     }
//   }
  
//   export default Logout;