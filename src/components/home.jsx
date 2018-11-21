import React from 'react'

function Home(props) {
  console.log('Home props', props)
  return (
    <div>
      <div>
        <a href='' 
        target='blank'>
        <img  className='homeImg' src={require('../BobbleBay.png')} alt="BobbleBay" /></a>
      </div>
    </div>
  )
}

export default Home;