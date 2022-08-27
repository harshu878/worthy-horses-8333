import { useState } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
   
     <Footer/>
    </div>
    </BrowserRouter>
  )
}
{/* <BrowserRouter> */}
{/* <div className="App">
  <Navbar />
  <Switch>
  <Redirect from='/CreatePost' to='/Register' />
    <Route exact path='/' component={Home}>
      <Home />
    </Route>

    <Route exact path='/Register' component={Register}>
      <Register /> 
    </Route>

    <Route exact path='/Login' component={Login}>
      <Login />
    </Route>

    <Route exact path='/CreatePost' component={CreatePost}>
      <CreatePost />
    </Route>

    <Route exact path='/AllPost' component={AllPost}>
      <AllPost />
    </Route>

    <Route component=
      {NotFound}>

    </Route>

    

  </Switch>
</div>
</BrowserRouter> */}
export default App
