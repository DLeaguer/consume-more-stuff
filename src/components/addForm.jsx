import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isNull } from 'util';

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
            status: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', this.state)
        this.props.dispatch(addItem(this.state))
    }

    handlChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState( {
            [name] : value
        })
        }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}><br/>
                <div className='addForm'>
                
                <label>
                    Title: <br/> <input onChange={this.handlChange} type="text" name='title'
                    placeholder='Enter Title..'/>
                     </label><br/><br/>
                
                <label>
                    Description: <br/><input onChange={this.handleChange} type="text" name='description'
                    placeholder='Enter Description..'/>
                    </label><br/><br/>

                <label>
                    Price: <br/> <input onChange={this.handleChange}type="text" name='price'
                    placeholder='Enter Price..'/>
                    </label><br/><br/>

                {/* need to be able to upload file <label>Image: <br/> <input onChange={this.handleChange}type="image" name='image'
                placeholder='Choose File..'/></label>
                <br/><br/> */}

                <label>
                    Condition: <br/> 
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Poor">Poor</option>
                    </select></label><br/><br/>

                <label>
                    Category: <br/> 
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="President">President</option>
                    <option value="Actor">Actor</option>
                    <option value="Singer">Singer</option>
                    </select></label><br/><br/>

                 {/* <label>
                    Status: <br/> 
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                    </select></label><br/><br/> */}

                
                <input type="submit" value="Submit" />
                <br/><br/>
                </div>
            </form>
        )
    }
}

export default connect()(AddForm)