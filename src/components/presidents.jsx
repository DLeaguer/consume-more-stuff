import React from 'react'
import './styles.css'

function Presidents(props) {
  console.log('Presidents props', props)
  return (
    props.bobbles.filter(item => item.category === 'Presidents').map(item => <div><br/><br/>President<br/><br/><a href={item.image} target='blank'><img className='catImg' src={item.image} alt="bobblehead.png" /></a> <br/> {item.title}</div>)
  )
}

export default Presidents;