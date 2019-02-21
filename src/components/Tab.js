import React, { Component } from 'react';
import { HashRouter, Route, Switch,Link} from 'react-router-dom';
import  Home from "../routers/Home"
import  Welcome from "../components/Welcome"
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class Tab extends Component {
  render() {
    return (
    <Home>
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Au100g" key="1">
                    <Welcome></Welcome>
                </TabPane>
                <TabPane tab="Au(T+N1)" key="2">

                </TabPane>
                <TabPane tab="Au(T+D)" key="3">

                </TabPane>
            </Tabs>
        </div>
    </Home>
    );
  }
}

export default Tab;
