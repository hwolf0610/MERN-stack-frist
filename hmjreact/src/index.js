import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './component/about/about'
import Contact from './component/Contact/contact'
import login from './component/login/login'
import signup from './component/signup/signup'
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
const routing = (

    <Router>

        <div className="container"   >

            <div className="header">
                <h1>My First React Example</h1>
            </div>
            <h1>React Router Example</h1>
            <ul className="nav nav-pills">
                <li className="active"> <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink> </li> &nbsp;&nbsp;&nbsp;
                <li><NavLink to="/about" exact activeStyle={{ color: 'green' }}>About</NavLink ></li>         &nbsp;&nbsp;&nbsp;
                <li><NavLink to="/contact" exact activeStyle={{ color: 'magenta' }}>Contact</NavLink > </li>  &nbsp;&nbsp;&nbsp;
                <li><NavLink to="/login" exact activeStyle={{ color: 'magenta' }}>login</NavLink ></li>       &nbsp;&nbsp;&nbsp;
                <li><NavLink to="/signup" exact activeStyle={{ color: 'magenta' }}>signup</NavLink ></li>       &nbsp;&nbsp;&nbsp;
            </ul>
            <div style={{height:'50px'}}></div>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={login} />
                <Route path="/signup" component={signup} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));  
