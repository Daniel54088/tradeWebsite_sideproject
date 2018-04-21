import React from 'react';
import { Table, Icon } from 'antd';


export default class Mission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {

const columns = [{
    title: '名稱',
    dataIndex: 'name',
  }, {
    title: '進度',
    dataIndex: 'progress',

  }, {
    title: '領取',
    dataIndex: 'take',

  }, {
    title: '獎勵',
    dataIndex: 'reward',
}];


const data = []; //資料型態
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: <div><h5>1111</h5><p>222</p></div>,
    progress: '1/32',
    take: <button>領取獎勵</button>,
    reward: `西湖区湖底公园${i}号`,
  });
}

const pagination = {  //分頁
  total: data.length,
  showSizeChanger: false,

  onChange(current) {
    console.log('Current: ', current);
  },
};


      return (
        <div className="quest">
          <div className="col-sm-12">
            <Table columns={columns} dataSource={data} pagination={pagination} />
          </div>
          <div className="clearfix"></div>
        </div>
        )
    }
}
