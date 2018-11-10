import React from 'react'
import ViewAll from './view-all.jsx'
import Login from './login.jsx'
import AddForm from './addForm.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header(props) {
  console.log('header props', props)
  return (
    <div className='Header'>
      <Router>
        <div>
          <Link className='App-header' to='/viewAll'>View All</Link>
          <Link className='App-header' to='/login'>Login</Link>
          <Link className='App-header' to='/addForm'>New Bobble</Link>
          <Route path='/viewAll' component={ViewAll} ></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/addForm' component={() =><AddForm addBobbleToList={props.addBobbleToList}/>}/> 
        </div>
      </Router>
      {/* <AddForm addForm={props.addForm}/> */}
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