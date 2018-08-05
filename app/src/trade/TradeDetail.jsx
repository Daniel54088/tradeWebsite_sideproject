import React from 'react';
import './trade.css';


export default class TradeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {

      return (
        <main>
          <div className="transaction">
            <div className="container">
              <div className="row">
                <div className="col-md-12 SellTitle">
                  <h1>貨幣A/貨幣B</h1>
                </div>
                  <div className="col-md-12">
                      <div className="coin-info">
                        <div className="Newvalue">
                          <h4>最新價</h4>
                          <h2>0.0000084</h2>
                        </div>
                          <div className="Newvalue">
                            <h4>24HR漲跌</h4>
                            <h2>0.0000084</h2>
                          </div>
                            <div className="Newvalue">
                              <h4>24HR最高價</h4>
                              <h2>0.0000084</h2>
                            </div>
                              <div className="Newvalue">
                                <h4>24HR最低價</h4>
                                <h2>0.0000084</h2>
                              </div>
                                <div className="Newvalue">
                                  <h4>24HR交易量</h4>
                                  <h2>0.0000084</h2>
                                </div>
                      </div>
                      // 心電圖
                      <div className="coin-img">
                      </div>
                  </div>

                  <div className="col-md-12">


                      <div className="col-stock col-stock-title">
                      <div className="coin-listTitle">
                      <ul>
                        <li>不知道是啥</li>
                        <li>Bid</li>
                        <li>Ask</li>
                        <li>Change</li>
                        <li>High/Low</li>
                      </ul>
                      </div>
                      </div>


                    <div className="col-stock">

                    <ul>
                      <li>不知道是啥</li>
                      <li>1.12345</li>
                      <li>1.12345</li>
                      <li className="SellDown">-1.11%</li>
                      <li>1.12345/1.12345</li>
                    </ul>

                      <ul>
                        <li>不知道是啥</li>
                        <li>1.12345</li>
                        <li>1.12345</li>
                        <li className="SellDown">-1.11%</li>
                        <li>1.12345/1.12345</li>
                    </ul>

                                          <ul>
                                            <li>不知道是啥</li>
                                            <li>1.12345</li>
                                            <li>1.12345</li>
                                            <li className="SellDown">-1.11%</li>
                                            <li>1.12345/1.12345</li>
                                        </ul>
                                                              <ul>
                                                                <li>不知道是啥</li>
                                                                <li>1.12345</li>
                                                                <li>1.12345</li>
                                                                <li className="SellUp">-1.11%</li>
                                                                <li>1.12345/1.12345</li>
                                                            </ul>


                    </div>
                  </div>

                  <div className="col-md-6 col-md-offset-3">

                    <div className="SellBuy">

                      <div className="SellVlue">

                      <div className="VlueLeft">
                      <h4>Volume</h4>
                      <input type="text" className="input_mainpg"></input>
                      </div>

                      <div className="VlueRight">
                        <p>Pip Value</p>
                        <h4>$33.33</h4>
                      </div>

                      </div>

                      <div className="Sellmiddle">
                      <input type="checkbox"></input>
                      <p>Open trade when rate</p>
                      </div>

                      <div className="trade-btn">
                        <a href=""><h6>SELL</h6><h4>1.12345</h4></a>
                        <a href=""><h6>BUY</h6><h4>1.12345</h4></a>
                      </div>

                      <div className="Sellbottom">
                        <div className="Sellbottombtn">
                        <input type="checkbox"></input>
                        <p>close at loss</p>
                        </div>
                          <div className="Sellbottombtn">
                          <input type="checkbox"></input>
                          <p>close at Profit</p>
                          </div>
                      </div>
                      <a href="" className="SellTrade"><h3>Trade</h3></a>


                    </div>
                  </div>



              </div>
          </div>
        </div>
        </main>
        )
    }
}
