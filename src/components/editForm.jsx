import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      description: null,
      price: null,
      image: null,
      condition: null,
      category: null
    }
    console.log('edit props', props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!', this.state);
    this.props.editBobble(this.state, this.props.id);
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    // console.log('props edit form', this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input onChange={this.handleChange} type='text' name='title'></input>
        </label> <br/>
        <label> Description:
          <input onChange={this.handleChange} type='text' name='description'></input>
        </label> <br/>
        <label> Price:
          <input onChange={this.handleChange} type='text' name='price'></input>
        </label> <br/>
        <label> Image:
          <input onChange={this.handleChange} type='text' name='image'></input>
        </label> <br/>
        <label> Condition:
          <select onChange={this.handleChange} type='text' name='condition'>
            <option value=''selected disabled hidden>Selections</option>
            <option value='Excellent'>Excellent</option>
            <option value='Good'>Good</option>
            <option value='Poor'>Poor</option>
          </select>
        </label>
        <label> Category:
          <select onChange={this.handleChange} type='text' name='category'>
            <option value2=''selected disabled hidden>Selections</option>
            <option value2='Presidents'>President</option>
            <option value2='Actors'>Actor</option>
            <option value2='Singers'>Singer</option>
          </select>
        </label>
        <button type='submit'>Edit</button>
      </form>
    )
  }
}

export default EditForm