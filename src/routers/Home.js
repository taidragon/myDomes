import React, { Component } from 'react';
import ReactDOM   from 'react-dom'
import { BrowserRouter,Switch, Route,Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Menu, Icon, Button } from 'antd';
import { Affix } from 'antd';

import '../css/Home.css';


const {Header, Footer, Sider, Content} = Layout;

class Home extends Component {
    state = {
        test: "tab"
    };
    componentWillMount(){

    }
    render() {
        return (
            <div>
                <Layout>
                    <Header  style={{ height: "50px",lineHeight:"50px",textAlign:"left",padding:0,background:"#232323",borderBottom:"2px #797979 solid"}}>
                        <span  style={{color:"#fff",padding:"0 30px",width:"200px",display:"inline-block",fontSize:"22px",textAlign:"left"}}>myDemos</span>
                    </Header>
                    <Layout style={{height: document.body.clientHeight - 50 + "px", lineHeight: "50px"}}>
                        <Sider style={{background:"#232323",borderRight:"2px #797979 solid"}}>
                            <Menu
                                defaultSelectedKeys={["tab"]}
                                theme="dark"
                                style={{background:"#232323",border:"none"}}
                                selectedKeys={[]}
                                >
                                {/*<Menu.Item key="welcome">
                                    <Link to="/home/welcome"/><Icon type="pie-chart"/><span>welcome</span>
                                </Menu.Item>*/}
                                <Menu.Item key="tab">
                                    <Link to="/home/tab"><Icon type="desktop"/><span>Tab</span></Link>
                                </Menu.Item>
                                <Menu.Item key="gold">
                                    <Link to="/home/gold"><Icon type="inbox"/><span>Gold</span></Link>
                                </Menu.Item>
                                <Menu.Item key="Lists">
                                    <Link to="/home/Lists"><Icon type="inbox"/><span>Lists</span></Link>
                                </Menu.Item>
                                <Menu.Item key="Reduxs">
                                    <Link to="/home/Reduxs"><Icon type="inbox"/><span>Reduxs</span></Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{overflow: "auto"}} ref="content" id="content">
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home;


