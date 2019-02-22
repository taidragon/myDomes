import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './routers/Login.js';
import HomeRoute from './routers/HomeRoute.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename='/'>
                {/*<BrowserRouter basename='/myDomes/build/'>*/}
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={HomeRoute}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;