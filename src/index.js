import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Errors from './components/Errors/Errors';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router ,Route ,Link,Switch } from 'react-router-dom';
import Home from "./components/Home/Home";


ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/home" component={Home}/>
        <Route  path="*" component={Errors}/>

    </Switch>

    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
