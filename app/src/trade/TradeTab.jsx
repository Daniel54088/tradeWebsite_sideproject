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
          case '?market=ltc':
          whichTab= '5';
          break;
          default:
          whichTab= '1';
        }
          this.state = {
              nowPage:   whichTab,
              isLoading: true,
              BTCArray: [],
              ETHArray: [],
              XMRArray: [],
              XRPArray: [],
              LTCArray: [],
          }
          this.callback = this.callback.bind(this);
          this.getAllMarket = this.getAllMarket.bind(this);
    }

    componentDidMount(){
      //根據網址來判斷要拿哪個array
      this.getAllMarket(this.state.nowPage);
    }

    callback(key){

      switch(key) { //根據進來的domain網址來判斷預設的tab
        case '1':
        this.setState({nowPage:'1',isLoading:true});
        browserHistory.push('/trade?market=btc');
        this.getAllMarket(key);
        break;
        case '2':
        this.setState({nowPage:'2',isLoading:true});
        browserHistory.push('/trade?market=eth');
        this.getAllMarket(key);
        break;
        case '3':
        this.setState({nowPage:'3',isLoading:true});
        browserHistory.push('/trade?market=xmr');
        this.getAllMarket(key);
        break;
        case '4':
        this.setState({nowPage:'4',isLoading:true});
        browserHistory.push('/trade?market=xrp');
        this.getAllMarket(key);
        break;
        default:
        this.setState({nowPage:'5',isLoading:true});
        browserHistory.push('/trade?market=ltc');
        this.getAllMarket(key);
      }

    } //end of callback function


    getAllMarket(coin){
      let itemArray = [];
      let coinArray = ['BTC','ETH','XMR','XRP','LTC'];
      let coinIdx = Number(coin) - 1;
      let coinName = coinArray[coinIdx];

      //過濾這個 coin
      coinArray.splice(coinIdx,1);


      coinArray.map(function(item,index){
        $.ajax({
          method: "GET",
          url: 'https://min-api.cryptocompare.com/data/histoday?fsym='+ item +'&tsym='+coinName+'&limit=60&aggregate=1&e=CCCAGG',
          success: function(data){

            let coinObject = {};
                coinObject.dataArray = data.Data; //塞資料
                coinObject.name = item; //在塞coin 名稱

                for(let y = 0;y < coinObject.dataArray.length ; y++){
                  var time = new Date(parseInt(coinObject.dataArray[y].time+'000',10));
                  coinObject.dataArray[y].time = (time.getMonth()+1)+'/'+time.getDate()
                }

                itemArray.push(coinObject);

            switch (coinName) {
              case 'BTC':
                this.setState({BTCArray:itemArray,isLoading:false});
                break;
              case 'ETH':
                this.setState({ETHArray:itemArray,isLoading:false});
                break;
              case 'XMR':
                this.setState({XMRArray:itemArray,isLoading:false});
                break;
              case 'XRP':
                this.setState({XRPArray:itemArray,isLoading:false});
                break;
              case 'LTC':
                this.setState({LTCArray:itemArray,isLoading:false});
                break;
              default:

            }

          }.bind(this), //是個坑  無命名function奧在手動作bind
          error: function(data){
          },
        });
      }.bind(this));


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
                                <TabPane tab="BTC Market" key="1"> <TradeList dataArray={this.state.BTCArray}/></TabPane>
                                <TabPane tab="ETH Market" key="2"> <TradeList dataArray={this.state.ETHArray}/></TabPane>
                                <TabPane tab="XMR Market" key="3"> <TradeList dataArray={this.state.XMRArray}/></TabPane>
                                <TabPane tab="XRP Market" key="4"> <TradeList dataArray={this.state.XRPArray}/></TabPane>
                                <TabPane tab="LTC Market" key="5"> <TradeList dataArray={this.state.LTCArray}/></TabPane>
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
