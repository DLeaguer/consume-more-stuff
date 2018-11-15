import React from 'react'
import EditForm from './editForm.jsx'

function ViewAll(props) {
  console.log('view all props', props)
  return (
    props.bobbles.map(item => <div
      className='bobbleCards'><a href={item.image} target='blank'><img className='catImg' src={item.image} alt="bobblehead.png" /></a> <br/> {item.title} <br/> {item.description} <br/> ${item.price}.00 <br/>
      <button className='deleteButton' onClick={ () => {props.deleteBobble(item.id)}}>Delete</button> <hr/>
      <p id='editFormTitle'>Edit Form</p>
      <EditForm editBobble={props.editBobble} bobbles={props.bobbles} id={item.id} />
    </div>
    )
  )
}

export default ViewAll;