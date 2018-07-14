import React from 'react';
import { Link } from 'react-router';
import {Spin} from 'antd'; //等待選轉組件
import LiveItem from './LiveItem.jsx';
import './game_class.css';


let btcws = {};
let ethws = {};
let xrpws = {};
let neows = {};


export default class LiveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          btc:{b:'$6045',p:'300',P:'3.132%'},
          eth:{b:'$643',p:'-20',P:'-3.132%'},
          xrp:{b:'$33',p:'-26',P:'-6.312%'},
          neo:{b:'$69',p:'-920',P:'-7.42%'}
        }
        this.getCoins = this.getCoins.bind(this);
    }

    componentDidMount(){
        this.getCoins();
    }


    getCoins(){



      //binance socket api
      btcws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
      ethws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
      xrpws = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');
      neows = new WebSocket('wss://stream.binance.com:9443/ws/neousdt@ticker');



      //let coinArray = [btcws,ethws,xrpws,neows,ltcws];
      let coinArray = [btcws,ethws];

      coinArray.map(function(item,idx){
          let newCoin;

          item.onmessage = function(event) {
          let data = event.data;
          //轉成物件後再做處理
          newCoin = JSON.parse(data);
          newCoin.b = "$"+newCoin.b.substr(0,7);
          newCoin.p = newCoin.p.substr(0,7);
          newCoin.P = newCoin.P + '%';

          switch (idx) {
            case 0:
              this.setState({btc:newCoin});
              break;
            case 1:
              this.setState({eth:newCoin});
              break;
            case 2:
              this.setState({xrp:newCoin});
              break;
            case 3:
              this.setState({neo:newCoin});
            break;

            default:
          }

        }.bind(this);
      }.bind(this))


    } //end of getcoins

    componentWillUnmount(){
      btcws.close();
      ethws.close();
      xrpws.close();
      neows.close();
    }



    render() {


      let CryptocurrenciesArray = [
        {name:'BTC', price:this.state.btc.b, change:this.state.btc.p, percent:this.state.btc.P  ,image:require('../../../../images/coins/opengraph.png')},
        {name:'ETH', price:this.state.eth.b, change:this.state.eth.p, percent:this.state.eth.P, image:require('../../../../images/coins/eth.png')},
        {name:'XRP', price:this.state.xrp.b, change:this.state.xrp.p, percent:this.state.xrp.P, image:require('../../../../images/coins/Ripple.png')},
        {name:'XMR', price:this.state.neo.b, change:this.state.neo.p, percent:this.state.neo.P, image:require('../../../../images/coins/xmr.png')}
      ]

      return (
        <div className="col-md-12 live_bg">

            <div className="live_list">
              {CryptocurrenciesArray.map(function(item,index){ //房間的array做map渲染
                return(
                  <LiveItem key={index} name={item.name} price={item.price} change={item.change} percent={item.percent} image={item.image}/>
                );
              })}

              </div>


        </div>
        )
    }
}
