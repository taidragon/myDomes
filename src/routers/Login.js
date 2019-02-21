import React, { Component } from 'react';
import { HashRouter, Route, Switch,Link} from 'react-router-dom';
import {Form, Icon, Input, Button} from 'antd';
import '../css/Login.css';
class Login extends Component {
  render() {
    return (
      <div className="Login">
        <p>
          用户名：<input type="text"/>
        </p>
        <p>
          密码：<input type="password"/>
        </p>
        <p>
          <button><Link to="/home/tab">登录</Link></button>
        </p>
      </div>
    );
  }
}

export default Login;
