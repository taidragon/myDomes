import React, { Component } from 'react';
import { HashRouter, Route, Switch,Link} from 'react-router-dom';
import  Home from "../routers/Home"
import { Carousel } from 'antd';

import '../css/Lists.css';



class Lists extends Component {
  render() {
    return (
    <Home>
        <div>
            <Carousel vertical autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        </div>
    </Home>
    );
  }
}

export default Lists;
