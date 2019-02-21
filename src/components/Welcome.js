import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Welcome extends Component {
    constructor(props) {
    super(props);
        this.state={
            data:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            seriesData:[5, 20, 36, 10, 10, 20]
        };
        this.changeData  = this.changeData.bind(this);
        this.initBarEcharts  = this.initBarEcharts.bind(this);
    }
    changeData(){
        this.setState({
            seriesData: [5,6,7,8,9,10]
        });
    }
    initBarEcharts(){
        let myChart = echarts.init(document.getElementById('main'));
        let options = {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: this.state.data
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.state.seriesData
            }]
        };
        myChart.setOption(options,true)
    }
    componentDidMount() {
        this.initBarEcharts();
    }
    render() {
        return (
        <div>
            <div id="main" style={{ width: 400,height: 400 }}></div>
            <button onClick={this.changeData}>changeData</button>
            <p>{this.state.seriesData}</p>
        </div>
        );
    }
    componentWillUpdate(){

    }
    componentDidUpdate(){
        this.initBarEcharts();
    }
}

export default Welcome;