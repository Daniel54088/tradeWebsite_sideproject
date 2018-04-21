import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router';

/*结尾组件*/
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (


                  <footer>
                      <div className="footer_line">
                          <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                  <div className="footer_title"><h4>火竞猜</h4></div>
                                  <div className="footer_content">
                                      <Link to={`/about`}><p>关于</p></Link>
                                      <Link to={`/help`}><p>常见问题与帮助</p></Link>
                                      <Link to={`/term`}><p>规则与条款</p></Link>
                                      <Link to={`/about`}><p>加入联盟</p></Link>
                                      <Link to={`/about`}><p>联繫我们</p></Link>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="footer_title"><h4>支付方式</h4></div>
                                  <div className="footer_content">
                                      <img className="bigfooterimg" src={require('../images/footer/visa.png')}/>
                                      <img src={require('../images/footer/Tencent_QQ.png')}/>
                                      <img src={require('../images/footer/jdpay.png')}/>
                                      <img src={require('../images/footer/alipay.png')}/>
                              </div>
                          </div>
                              <div className="col-md-3">
                                  <div className="footer_title"><h4>博彩责任</h4></div>
                                  <div className="footer_content">
                                      <a href=""><img className="bigfooterimg" src={require('../images/footer/footer_logo.png')}/></a>
                                      <a href=""><img src={require('../images/footer/gc-logo.png')}/></a>
                                      <a href=""><img src={require('../images/footer/zgdyjdw.png')}/></a>
                                      <a href=""><img className="bigfooterimg" src={require('../images/footer/18+.png')}/></a>

                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="footer_title"><h4>网站安全</h4></div>
                                  <div className="footer_content footer_ssl">
                                  <img className="bigfooterimg" src={require('../images/footer/ssl.png')}/><p>全站加密连线</p>

                              </div>
                              </div>
                          </div></div>

                       </div>

                          <div className="container">

                          <div className="row">
                              <div className="col-md-12 footer_final"><p>©2017 火競猜有限公司, All rights reserved</p></div>
                          </div>
                      </div>

                  </footer>

        )
    }
}
