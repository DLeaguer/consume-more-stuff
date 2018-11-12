import React from 'react'

function Singers(props) {
  console.log('Singers props', props)
  console.log()
  return (
    props.bobbles.filter(item => item.condition === 'excellent').map(item => <div> {item.title}</div>)
  )
  }

export default Singers;
