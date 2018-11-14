import React from 'react'

function Presidents(props) {
  console.log('Presidents props', props)
  return (
    props.bobbles.filter(item => item.category === 'Presidents').map(item => <div><br/><br/><a href={item.image} target='blank'><img className='catImg' src={item.image} alt="bobblehead.png" /></a> {item.title}</div>)
  )
}

export default Presidents;