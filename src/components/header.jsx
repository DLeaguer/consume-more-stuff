import React from 'react'
import Home from './home.jsx'
import ViewAll from './view-all.jsx'
import Login from './login.jsx'
import Logout from './logout.jsx'
import AddForm from './addForm.jsx'
import Categories from './categories.jsx'
import Register from './register.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header(props) {
  console.log('header props', props)
  return (
    <div className='App'>
      <Router>
        <div>
          <header className="App-header">
            <Link className='App-title' to='/' activeclassname='App-title-active'> <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img  className='headerImg'src={require('../BobbleBay.png')} alt="BobbleBay" /></a></Link>
            <div className="route">
              <div>
                <Link className='App-route' to='/viewAll'>View All</Link>
              </div>
              <div>
                <Link className='App-route' id='addFormId' to='/addForm'>New Bobble</Link>
              </div>
              <br/>
              <div className='catLink'>
                <Link className='App-route' to='/categories'>Categories</Link>
                {/* <Route path='/categories' component={ () => <Categories bobbles={props.bobbles}/>}></Route> */}
              </div>
            </div>
              <Link className='App-task' to='/login'>Login</Link>
              <Link className='App-task' to='/'>
              <div onClick={props.logoutUser}>Logout</div>
              </Link>
              <Link className='App-task' to='/register'>Register</Link>
          </header>

          <hr/>

          <Route exact path='/' component={Home}></Route>
          <Route path='/viewAll' component={() => <ViewAll bobbles={props.bobbles} deleteBobble={props.deleteBobble} editBobble={props.editBobble}/>}/>
          <Route path='/addForm' component={() =><AddForm addBobbleToList={props.addBobbleToList}/>}/> 
          <Route path='/categories' component={() => <Categories bobbles={props.bobbles}/>} /> 
          <Route path='/login' component={() => <Login loginUser={props.loginUser}/>} />
          <Route path='/logout' component={() => <Logout logoutUser={props.logoutUser}/>} />
          <Route path='/register' component={() =><Register registerUser={props.registerUser}/>}></Route>
        </div>
      </Router>
    </div>
  )
}

export default Header;