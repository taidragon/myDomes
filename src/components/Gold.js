import React, { Component } from 'react';
import { HashRouter, Route, Switch,Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import 'whatwg-fetch'
import 'es6-promise'
import  Home from "../routers/Home"
import  GoldCard from "./GoldCard"

class Gold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData:[]
        }
    }
    componentDidMount(){
        let url = "../json/gold.json";
        /*let url="http://web.juhe.cn:8080/finance/gold/shgold?key=7e866d121c25976d086549b11295e53f";*/
        fetch(url,{method:"GET",mode: 'cors'})
            .then(function(response) {
                console.log(response);
                return response.json()
            })
            .then(function(data){
                let theData=[];
                for(var i in data.result[0]){
                    data.result[0][i].key=i;
                    theData.push(data.result[0][i])
                }
                console.log(theData)
                this.setState({tabData:theData})
            }.bind(this))
            .catch(function(ex) {
                console.log('parsing failed'+ ex)
            });
    }
    render() {
        return (
            <Home>
                <div>
                    <Row>
                        <Col span={24} style={{padding: "10px"}}>
                            <Card>
                                黄金当前价格
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18} style={{padding:"10px"}}>
                            <Card>
                                <GoldCard tabData={this.state.tabData}></GoldCard>
                            </Card>
                        </Col>
                        <Col span={6} style={{padding:"10px"}}>
                            <Card>
                                15613156
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Home>
    );
  }
}

export default Gold;
