/**
 * Created by HP on 2019/1/21.
 */
import React, { Component } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Welcome from '../components/Welcome.js';
import Tab from '../components/Tab.js';
import Gold from '../components/Gold.js';
import Lists from '../components/Lists.js';
import Reduxs from '../components/Reduxs.js';

class HomeRoute extends Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path="/home/welcome" component={Welcome}/>
                        <Route exact path="/home/tab" component={Tab}/>
                        <Route exact path="/home/gold" component={Gold}/>
                        <Route exact path="/home/lists" component={Lists}/>
                        <Route exact path="/home/Reduxs" component={Reduxs}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default HomeRoute;