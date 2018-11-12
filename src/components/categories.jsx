import React from 'react'
import Singers from './singers.jsx'
import Actors from './actors.jsx'
import Presidents from './presidents.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header(props) {
  console.log('header props', props)
  return (
    <div className='App'>
      <Router>
        <div>
              <Link className='App-route' to='/singers'>Singers</Link>
              <Link className='App-route' to='/actors'>Actors</Link>
              <Link className='App-route' to='/presidents'>Presidents</Link>

          <hr/>
          <Route path='/singers' component={ () => <Singers bobbles={props.bobbles} />}></Route>
          <Route path='/actors' component={Actors}></Route>
          <Route path='/presidents' component={Presidents}></Route>
        </div>
      </Router>
    </div>
  )
}

export default Header;