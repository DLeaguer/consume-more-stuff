import React from 'react'

function Actors(props) {
  console.log('Actors props', props)
  return (
    // <div>Actors component</div>
    props.bobbles.map(item => <div
      className='bobbleCards'><a href={item.image} target='blank'><img src={item.image} alt="bobblehead.png" /></a> <br/> {item.title} <br/> {item.description} <br/> {item.price} <br/>
      <button className='deleteButton' onClick={ () => {props.deleteBobble(item.id)}}>Delete</button>
    </div>)
  )
}

export default Actors;