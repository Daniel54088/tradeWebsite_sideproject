import React from 'react';


export default class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {

      return (
        <main>
          <div className="download">
              <div className="download_down">
                  <img src="images/download/arrow_down.png" alt="">
              </div>
              <div className="download_mobile">
                  <ul>
                      <li><img src="images/download/GGCarry.png" alt=""/></li>
                      <li className="mobile2">
                          <h5>火竞猜客户端下载</h5>
                          <h6>掌中竞猜，快意拥有</h6>
                      </li>
                  </ul>
                  <ul className="download_btn">
                      <li>
                          <a href="https://www.ggcarry888.com/" className="btndefault">官网</a></li>
                      <li>
                          <a  className="btndefault"  href="javascript:iosButton();" >下载</a></li>
                  </ul>
              </div>
              <div className="download_title">
                  <img src="images/download/pagetitle.png" alt=""></div>
              <div className="container download_but_zero">
                  <div className="row">
                      <div className="col-lg-2"></div>
                      <div className="col-md-12 download_but">
                          <ul>
                              <li><a onClick={console.log(213)} ><img src="images/download/ios-download.png" style={{'cursor':pointer}} alt=""/></a></li>
                              <li><a onClick={console.log(213)} ><img src="images/download/android-download.png" style={{'cursor':pointer}} alt=""/></a></li>
                  </ul>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row content2">
                      <div className="col-md-4 download_sign" id="fast_sign">
                          <h1>快速注册</h1>
                          <div className="download_wallet">
                              <div className="wallet_save_input">
                                  <div className="wallet_saveAmount">
                                      <p>用户名：</p>
                                  </div>
                                  <div className="form_group has_error">
                                      <input type="text" className="input_mainpg" id="AccountName" name="loginID" placeholder=""/>
                                  </div>
                              </div>
                              <div className="wallet_save_input">
                                  <div className="wallet_saveAmount">
                                      <p>密码：</p>
                                  </div>
                                  <div className="form_group has_error">
                                      <input type="password" className="input_mainpg" id="PassWord" name="loginID" placeholder=""/>
                                  </div>
                              </div>
                              <div className="wallet_save_input">
                                  <div className="wallet_saveAmount">
                                      <p>确认密码：</p>
                                  </div>
                                  <div className="form_group has_error">
                                      <input type="password" className="input_mainpg" id="Confirm"  name="loginID" placeholder=""/>
                                  </div>
                              </div>
                              <div className="wallet_save_input">
                                  <div className="wallet_saveAmount">
                                      <p>推荐代码：</p>
                                  </div>
                                  <div className="form_group has_error">
                                      <input type="text" className="input_mainpg" id="RecommandCode" name="loginID" placeholder=""/>
                                  </div>
                              </div>
                              <p className="download_alert">当您按下提交，您已确认您已满18岁
                                  <br/>并同意火竞猜的<a style={{'color'#007bff:}}  target="_blank">条款</a>、隐私权以及 Cookie 政策</p>
                                  <a onClick={} className="btndefault">提交</a> </div>
                              </div>
                              <div className="col-md-4 download_spec_mobile">
                                <h1>遊戲特色</h1>
                          <div className="download_spec">
                              <div id="wrap">
                                  <ul id="slider">
                                      <li><img src="images/download/analysis.png"/></li>

                                  </ul>
                              </div>
                              <a id="fast_sign_btn" className="btndefault">快速注册</a>
                          </div>
                      </div>
                      <div className="col-md-4 download_step">
                          <h1>安装步骤</h1>
                          <div id="qrcode"></div>
                          <ul className="helpppp">
                  <li >iOS安装步骤</li>
                              <li className="download_but_zero">扫描二维码下载
                                  <br> 下载完成后在手机中保存此文件
                              </li>
                              <li className="download_but_zero"><i className="fas fa-angle-down"></i></li>
                              <li>进入手机中的【设置】 => 【通用】 => 【设备管理】
                              </li>
                              <li><i className="fas fa-angle-down"></i></li>
                              <li>点击 【Guangzhou Juhuang Network Technology】
                                  <br>信任此应用
                              </li>
                              <li><i className="fas fa-angle-down"></i></li>
                              <li>设置成功后，就能立即使用 APP 进行游戏
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </main>
        )
    }
}
