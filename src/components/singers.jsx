import React from 'react'

function Singers(props) {
  console.log('Singers props', props)
  return (
    props.singBobbles.map( item => <div>{item.title} <br/> {item.description}</div>)
  )
}

export default Singers;