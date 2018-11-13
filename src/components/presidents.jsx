import React from 'react'

function Presidents(props) {
  console.log('Presidents props', props)
  return (
    // <div>Presidents component</div>
    props.bobbles.map(item => <div
      className='bobbleCards'><a href={item.image} target='blank'><img src={item.image} alt="bobblehead.png" /></a> <br/> {item.title} <br/> {item.description} <br/> {item.price} <br/>
      <button className='deleteButton' onClick={ () => {props.deleteBobble(item.id)}}>Delete</button>
    </div>)
  )
}

export default Presidents;