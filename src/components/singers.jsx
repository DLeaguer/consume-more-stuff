import React from 'react'

function Singers(props) {
  console.log('Singers props', props)
  return (
    props.bobbles.filter(item => item.category === 'Singers').map(item => <div><a href={item.image} target='blank'><img src={item.image} alt="bobblehead.png" /></a> {item.title}</div>)
  )
}

export default Singers;