import React from 'react'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Profile from '../pages/Profile/Profile'
import Library from '../pages/Library/Library'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import MyCollection from '../pages/Collection/MyCollection'

function Main() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={SignUp}/>  
          <Route path="/library" component={Library}/>
          <Route path="/mycollection" component={MyCollection}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
  )
}

export default Main
