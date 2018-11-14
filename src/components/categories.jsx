import React from 'react'
import Singers from './singers.jsx'
import Actors from './actors.jsx'
import Presidents from './presidents.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Categories(props) {
  console.log('header props', props)
  const catHideStyle = {
    // display: 'flex'
  }
  return (
    <div className='App'>
      <Router>
        <div>
          <header className="catHeader">
            
            {/* <div className="catLink"> */}
              {/* <div className="catHide" style={catHideStyle}> */}
                <Link className='App-route' to='/singers'>Singers</Link>
                <Link className='App-route' to='/actors'>Actors</Link>
                <Link className='App-route' to='/presidents'>Presidents</Link>
              {/* </div> */}
            {/* </div> */}
          </header>

          {/* <hr/> */}
          <div className="catRoute">
              <Route path='/singers' component={ () => <Singers bobbles={props.bobbles}/>}></Route>
              <Route path='/actors' component={ () => <Actors bobbles={props.bobbles}/>}></Route>
              <Route path='/presidents' component={ () => <Presidents bobbles={props.bobbles}/>}></Route>
          </div>
      </div>
      </Router>
    </div>
  )
}

export default Categories;