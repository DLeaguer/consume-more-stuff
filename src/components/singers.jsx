import React from 'react'

function Singers(props) {
  console.log('Singers props', props)
  console.log()
  return (
    props.bobbles.filter(item => item.category === 'Singers').map(item => <div><br/><br/>Singer<br/><br/><a href={item.image} target='blank'><img className='catImg' src={item.image} alt="bobblehead.png" /></a> {item.title}</div>)
  )
  }

export default Singers;
