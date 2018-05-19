import React from 'react';
import { Link } from 'react-router';
import {Spin} from 'antd'; //等待選轉組件
import LiveItem from './LiveItem.jsx';
import './game_class.css';




export default class LiveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {


      let CryptocurrenciesArray = [
        {name:'BTC', price:'$8000.10', image:require('../../../../images/coins/opengraph.png')},
        {name:'ETH', price:'$688.10', image:require('../../../../images/coins/eth.png')},
        {name:'XRP', price:'$0.67843', image:require('../../../../images/coins/Ripple.png')},
        {name:'XMR', price:'$10.10', image:require('../../../../images/coins/xmr.png')},
        {name:'LTC', price:'$146.10', image:require('../../../../images/coins/litecoin.svg')}
      ]

      return (
        <div className="col-md-4 live_bg">
          <div className="Liveing_title"><h3>Cryptocurrencies</h3></div>


            <div className="live_list">
              {CryptocurrenciesArray.map(function(item,index){ //房間的array做map渲染
                return(
                  <LiveItem key={index} name={item.name} price={item.price} image={item.image}/>
                );
              })}

              </div>


        </div>
        )
    }
}
