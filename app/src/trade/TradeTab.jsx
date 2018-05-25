import React from 'react';
import TradeList from './TradeList.jsx'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './trade.css';
import {Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

let whichTab ;
export default class TradeTab extends React.Component {
    constructor(props) {
        super(props);
        switch(location.search) { //根據進來的domain網址來判斷預設的tab
          case '?market=btc':
          whichTab= '1';
          break;
          case '?market=eth':
          whichTab= '2';
          break;
          case '?market=xmr':
          whichTab= '3';
          break;
          case '?market=xrp':
          whichTab= '4';
          break;
          default:
          whichTab= '5';
        }
          this.state = {
              nowPage:   whichTab,
              btcArray: [],
          }
          this.callback = this.callback.bind(this);
          this.getBTCMarket = this.getBTCMarket.bind(this);
    }

    componentDidMount(){
      this.getBTCMarket();
    }


    callback(key){

      switch(key) { //根據進來的domain網址來判斷預設的tab
        case '1':
        this.setState({nowPage:'1'});
        browserHistory.push('/trade?market=btc');
        break;
        case '2':
        this.setState({nowPage:'2'});
        browserHistory.push('/trade?market=eth');
        break;
        case '3':
        this.setState({nowPage:'3'});
        browserHistory.push('/trade?market=xmr');
        break;
        case '4':
        this.setState({nowPage:'4'});
        browserHistory.push('/trade?market=xrp');
        break;
        default:
        this.setState({nowPage:'5'});
        browserHistory.push('/trade?market=ltc');
      }

    } //end of callback function

    getBTCMarket(){
        let coinArray = ['ETH','XRP','XMR','LTC'];
        let itemArray  = [];

      coinArray.map(function(item,index){
        $.ajax({
          method: "GET",
          url: 'https://min-api.cryptocompare.com/data/histoday?fsym='+ item+'&tsym=BTC&limit=10&aggregate=1&e=CCCAGG',

          success: function(data){
            itemArray.push(data.Data);
  

          }.bind(this), //是個坑  無命名function奧在手動作bind

          error: function(data){

          },
        });
      });
      this.setState({btcArray:itemArray});

    }

    render() {
        console.log(this.state.btcArray[0]);
      return (
        <div>
          <Header callback={this.callback}/>
            <main>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 fpk_1 content2">
                              <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
                                <TabPane tab="BTC Market" key="1"><TradeList dataArray={this.state.btcArray}/></TabPane>
                                <TabPane tab="ETH Market" key="2"><TradeList/></TabPane>
                                <TabPane tab="XMR Market" key="3"><TradeList/></TabPane>
                                <TabPane tab="XRP Market" key="4"><TradeList/></TabPane>
                                <TabPane tab="LTC Market" key="5"><TradeList/></TabPane>
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
