import React from 'react'

function ViewAll(props) {
  console.log('view all props', props)
  return (
    props.bobbles.map(item => <div>{item.title} <br/> {item.description}</div>)
   
    
  )
}

export default ViewAll;