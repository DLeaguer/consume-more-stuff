import React from 'react'
import './styles.css'

function Presidents(props) {
  console.log('Presidents props', props)
  return (
    
    <div className= 'BobContainer'>
      {props.bobbles.filter(item => item.category === 'Presidents').map(item => <div><br/><br/>Singer<br/><br/><a href={item.image} target='blank'><img className='bobbleCards' src={item.image} alt="bobblehead.png" /></a> <br/> {item.title}</div>)}
    
    </div>
  )
}

export default Presidents;