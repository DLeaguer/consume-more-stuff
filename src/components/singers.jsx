import React from 'react'

function Singers(props) {
  console.log('Singers props', props)
  console.log()
  return (
    <div className= 'BobContainer'>
      {props.bobbles.filter(item => item.category === 'Singers').map(item => <div><br/><br/>Singer<br/><br/><a href={item.image} target='blank'><img className='bobbleCards' src={item.image} alt="bobblehead.png" /></a> <br/> {item.title}</div>)}
    
    </div>
  )
  }

export default Singers;
