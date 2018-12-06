import React from 'react'

function Actors(props) {
  console.log('Actors props', props)
  return (
    <div className= 'BobContainer'>
      {props.bobbles.filter(item => item.category === 'Actors').map(item => <div><br/><br/>Singer<br/><br/><a href={item.image} target='blank'><img className='bobbleCards' src={item.image} alt="bobblehead.png" /></a> <br/> {item.title}</div>)}
    
    </div>
  )
}

export default Actors;