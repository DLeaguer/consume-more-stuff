import React from 'react'
import Home from './home.jsx'
import ViewAll from './view-all.jsx'
import Login from './login.jsx'
import AddForm from './addForm.jsx'
import Categories from './categories.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header(props) {
  console.log('header props', props)
  return (
    <div className='App'>
      <Router>
        <div>
          <header className="App-header">
            <Link className='App-title' to='/' activeclassname='App-title-active'> <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img src={require('../BobbleBay.png')} alt="BobbleBay" /></a></Link>
            <div className="route">
              <Link className='App-route' to='/viewAll'>View All</Link>
              <Link className='App-route' to='/addForm'>New Bobble</Link>
              <br/>
              <div className='catLink'>
                <Link className='App-route' to='/categories'>Categories</Link>
                <Route path='/categories' component={Categories}></Route>
              </div>
            </div>
              <Link className='App-task' to='/login'>Login</Link>
          </header>

          <hr/>

          <Route path='/' component={Home}></Route>
          <Route path='/viewAll' component={() => <ViewAll bobbles={props.bobbles} />}/>
          <Route path='/addForm' component={() =><AddForm addBobbleToList={props.addBobbleToList}/>}/> 
          <Route path='/login' component={Login}></Route>
        </div>
      </Router>
    </div>
  )
}

export default Header;

//   return (
//     <div className="App">
//       <Router>
//         <div>
//         <header className="App-header">
//             <Link className="App-title" to='/' activeclassname='App-title-active'>KANBAN</Link>
//             <div className="route">
//               <Link className='App-title'  to='/sample'>Sample</Link>
//               <Link className='App-title' to='/about/123'>About</Link>
//               <Link className='App-title' to='/kanban'>Kanban board</Link>
//             </div>
//             <Link className='App-title' to='/newTask'>+ NEW TASK</Link>
//           </header>
          
//           <hr />
          
//           <Route path='/' component={Localhost}/>
//           <Route path='/sample' component={Sample}/>
//           <Route path='/about/:id' component={About}/>
//           {/* <Route path='/addForm' component={ () => <AddForm addItem={this.addItemToInventory}/>}/> */}
//           <Route path='/kanban' component={ () => <Category tasks={this.state.tasks}/>}/>
//           <Route path='/newTask' component={ () => <AddForm addItem={this.addItemToInventory}/>}/>
//         </div>
//       </Router>
//     </div>
//   )
// }
// }