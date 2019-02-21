import React, { Component } from 'react';
import { HashRouter, Route, Switch,Link} from 'react-router-dom';
import { Card } from 'antd';
import { Table, Divider, Tag } from 'antd';

class GoldCard extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      const columns = [
          {
          title: '品种',
          dataIndex: 'variety',
          key: 'variety',
      }, {
          title: '最新价',
          dataIndex: 'latestpri',
          key: 'latestpri',
      }, {
          title: '开盘价',
          dataIndex: 'openpri',
          key: 'openpri',
      }, {
          title: '最高价',
          dataIndex: 'maxpri',
          key: 'maxpri',
      }, {
          title: '最低价',
          dataIndex: 'minpri',
          key: 'minpri',
      }, {
          title: '涨跌幅',
          dataIndex: 'limit',
          key: 'limit',
      }, {
          title: '昨收价',
          dataIndex: 'yespri',
          key: 'yespri',
      }, {
          title: '总成交量',
          dataIndex: 'totalvol',
          key: 'totalvol',
      }, {
          title: '更新时间',
          dataIndex: 'time',
          key: 'time',
      }];
    return (
        <div>
                <Table columns={columns} dataSource={this.props.tabData} bordered pagination={false} size="middle"/>
        </div>
    );
  }
}

export default GoldCard;
