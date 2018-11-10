import React from 'react'
import ViewAll from './view-all.jsx'
import Login from './login.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header(props) {
  console.log('props', props)
  return (
    <div className='Header'>
      <Router>
        <div>
          <Link className='App-header' to='/viewAll'>View All</Link>
          <Link className='App-header' to='/login'>Login</Link>
          <Route path='/viewAll' component={ViewAll}></Route>
          <Route path='/login' component={Login}></Route>
        </div>
      </Router>
      {/* <ViewAll />
      <Login /> */}
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