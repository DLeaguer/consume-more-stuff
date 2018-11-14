import React from 'react'

function Home(props) {
  console.log('Home props', props)
  return (
    <div>Home Component
      <div>
        <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img  className='homeImg' src={require('../BobbleBay.png')} alt="BobbleBay" /></a>
      </div>
    </div>
  )
}

export default Home;