import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  Home from "../routers/Home"
import { Carousel } from 'antd';


import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


class Reduxs extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
      const { PayIncrease, PayDecrease } = this.props;
    return (
    <Home>
            <div>
                <h2>当月工资为{this.props.tiger}</h2>
                <button onClick={PayIncrease}>升职加薪</button>
                <button onClick={PayDecrease}>迟到罚款</button>
            </div>
    </Home>
    );
  }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
                                                                                PayIncrease: () => dispatch({ type: '涨工资' }),
        PayDecrease: () => dispatch({ type: '扣工资' })
    }
}



export default Reduxs= connect(mapStateToProps, mapDispatchToProps)(Reduxs);
