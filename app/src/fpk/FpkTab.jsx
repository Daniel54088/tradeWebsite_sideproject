import React from 'react';
import FpkList from './FpkList.jsx'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './fpk.css';
import {Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

let whichTab ;
export default class FpkTab extends React.Component {
    constructor(props) {
        super(props);
        switch(location.search) { //根據進來的domain網址來判斷預設的tab
          case '?game=lol':
          whichTab= '1';
          break;
          case '?game=dota2':
          whichTab= '2';
          break;
          case '?game=csgo':
          whichTab= '3';
          break;
          case '?game=pubg':
          whichTab= '4';
          break;
          default:
          whichTab= '5';
        }
          this.state = {
              nowPage:   whichTab,
          }
          this.callback = this.callback.bind(this);
    }

    callback(key){

      switch(key) { //根據進來的domain網址來判斷預設的tab
        case '1':
        this.setState({nowPage:'1'});
        browserHistory.push('/fpk?game=lol');
        break;
        case '2':
        this.setState({nowPage:'2'});
        browserHistory.push('/fpk?game=dota2');
        break;
        case '3':
        this.setState({nowPage:'3'});
        browserHistory.push('/fpk?game=csgo');
        break;
        case '4':
        this.setState({nowPage:'4'});
        browserHistory.push('/fpk?game=pubg');
        break;
        default:
        this.setState({nowPage:'5'});
        browserHistory.push('/fpk?game=pvp');
      }

    }

    render() {

      return (
        <div>
          <Header callback={this.callback}/>
            <main>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 fpk_1 content2">
                              <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
                                <TabPane tab="LOL" key="1"><FpkList/></TabPane>
                                <TabPane tab="DOTA2" key="2"><FpkList/></TabPane>
                                <TabPane tab="CS:GO" key="3"><FpkList/></TabPane>
                                <TabPane tab="PUBG" key="4"><FpkList/></TabPane>
                                <TabPane tab="王者榮耀" key="5"><FpkList/></TabPane>
                              </Tabs>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
              <Footer/>
        </div>


        )
    }
}
