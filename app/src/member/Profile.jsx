import React from 'react';
import {Link, browserHistory } from 'react-router';
import {  Tabs,Tooltip } from 'antd';
const TabPane = Tabs.TabPane;
import MessageList from  './component/MessageList.jsx';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          nowPage: '1',
        }

        this.callback = this.callback.bind(this);
    }


    callback(key){
      if(key == 1){
        this.setState({nowPage:'1'});
      }else{
        this.setState({nowPage:'2'});
      }
    }


    render() {

      return (
        <div className="profile">
        123
        </div>
        )
    }
}
