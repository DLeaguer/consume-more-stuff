import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { isNull } from 'util';
// import axios from "axios";

class AddForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: null,
        description: null,
        price: null,
        image: null,
        condition: null,
        category: null,
      }
      console.log('addForm props', props)
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted!', this.state)
        this.props.addBobbleToList(this.state)
    }
    
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <br/>
          <div className="addForm">
            <label> Title: <br/> <input onChange={this.handleChange} type='text' name='title' placeholder='title...'></input>
            </label>
            <br/>
            <label> Description: <br/> <input onChange={this.handleChange} type='text' name='description' placeholder='description...'></input>
            </label>
            <br/>
            <label> Price: <br/> <input onChange={this.handleChange} type='text' name='price' placeholder='price...'></input>
            </label>
            <br/>
            <label> Image: <br/> <input onChange={this.handleChange} type='text' name='image' placeholder='image...'></input>
            </label>
            <br/>
            <label> Condition: <br/> 
              <select onChange={this.handleChange} type='text' name='condition'>
                <option value=''selected disabled hidden>Selections</option>
                <option value='excellent'>Excellent</option>
                <option value='good'>Good</option>
                <option value='poor'>Poor</option>
              </select>
            </label>
            <br/>
            <label> Category: <br/>
              <select onChange={this.handleChange} type='text' name='category'>
                <option value2=''selected disabled hidden>Selections</option>
                <option value2='presidents'>Presidents</option>
                <option value2='actors'>Actors</option>
                <option value2='singers'>Singers</option>
              </select>
            </label>
            <br/><br/>
            <button type='submit'>Create</button>
            <br/>
          </div>
        </form>
      )
    }
  }
  
  export default AddForm;


// class AddForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: null,
//             description: null,
//             price: null,
//             image: null,
//             condition: null,
//             category: null,
//             status: null
//         }
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('submitted', this.state)
//         // this.props.dispatch(addItem(this.state))
//     }

//     handlChange = (e) => {
//         e.preventDefault()
//         const {name, value} = e.target
//         this.setState( {
//             [name] : value
//         })
//         }

    

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}><br/>
//                 <div className='addForm'>
                
//                 <label>
//                     Title: <br/> <input onChange={this.handlChange} type="text" name='title'
//                     placeholder='Enter Title..'/>
//                      </label><br/><br/>
                
//                 <label>
//                     Description: <br/><input onChange={this.handleChange} type="text" name='description'
//                     placeholder='Enter Description..'/>
//                     </label><br/><br/>

//                 <label>
//                     Price: <br/> <input onChange={this.handleChange}type="text" name='price'
//                     placeholder='Enter Price..'/>
//                     </label><br/><br/>

//                 {/* need to be able to upload file <label>Image: <br/> <input onChange={this.handleChange}type="image" name='image'
//                 placeholder='Choose File..'/></label>
//                 <br/><br/> */}

//                 <label>
//                     Condition: <br/> 
//                     <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="Excellent">Excellent</option>
//                     <option value="Good">Good</option>
//                     <option value="Poor">Poor</option>
//                     </select></label><br/><br/>

//                 <label>
//                     Category: <br/> 
//                     <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="President">President</option>
//                     <option value="Actor">Actor</option>
//                     <option value="Singer">Singer</option>
//                     </select></label><br/><br/>

//                  {/* <label>
//                     Status: <br/> 
//                     <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="Available">Available</option>
//                     <option value="Unavailable">Unavailable</option>
//                     </select></label><br/><br/> */}

                
//                 <input type="submit" value="Submit" />
//                 <br/><br/>
//                 </div>
//             </form>
//         )
//     }
// }

// export default connect()(AddForm)