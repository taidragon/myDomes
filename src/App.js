import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './routers/Login.js';
import HomeRoute from './routers/HomeRoute.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/home" component={HomeRoute}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;