import React from 'react'

function Actors(props) {
  console.log('Actors props', props)
  return (
    props.bobbles.filter(item => item.category === 'Actors').map(item => <div><a href={item.image} target='blank'><img src={item.image} alt="bobblehead.png" /></a> {item.title}</div>)
  )
}

export default Actors;