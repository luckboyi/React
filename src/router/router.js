import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,Link
} from 'react-router-dom'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Counter from 'pages/count/counter'
import UserInfo from 'pages/UserInfo/UserInfo';
const getRouter = () => (
  <div>
    <h4>Rreact</h4>
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/About'>Page1</Link>
          </li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/userinfo">UserInfo</Link></li>
        </ul>
        <Switch>
          <Route exact path ='/' component={Home}></Route>
          <Route exact path ='/About' component={About}></Route>
          <Route path="/counter" component={Counter}/>
          <Route path="/userinfo" component={UserInfo}/>
        </Switch>
      </div>
    </Router>
  </div>
)
export default getRouter;