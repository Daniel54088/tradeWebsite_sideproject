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
      const Tooltip1 = <div><h4>关于验证真实姓名</h4>当您提款时，我们必须核对您的银行帐户姓名与您个人资料中的真实姓名是否相符，若您没有提供真实姓名，提款程序便无法完成</div>;
      const Tooltip2 = <div><h4>关于验证信箱</h4>-我们会寄送火竞猜每月精彩活动通知给您<br/>-火竞猜克服小天使能更快速的联繫上您<br/>-各种专属优惠能更确实迅速送达您手中</div>;
      const Tooltip3 = <div><h4>关于验证手机</h4>验证手机能帮助您找回密码，以及将来协助您验证身分</div>;

      return (
        <div className="profile">
          可以全頁砍掉重弄
          <div className="col-lg-12 col-sm-12">
            <div className="col-lg-8 col-sm-12">
              <div className="all_info">
                <div className="head_sec">
                  <div className="avatar" style={{background:"url('http://placehold.it/100x100')"}}></div>
                  <span className="user_name">Daniel Wang</span>
                  <div className="btn_group">
                    <Link to={`/memberset`} className="btnsys"><i className="fa fa-edit"></i>edit profile</Link>
                    <a href="#" className="btnsys"><i className="fa fa-lock"></i>change password</a>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="info_sec">
                  <div className="info_row">
                    <div className="title">Real Name：</div>
                    <span className="user_name">Daniel Wang</span>
                    <div className="vertify_notice">验证获得500银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">verify</a>
                      <Tooltip placement="right" title={Tooltip1}>
                      <i className="fa fa-info-circle"></i>
                      </Tooltip>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="title">E-mail：</div>
                    <span className="user_name">asdjwiosadhhoifh@qq.com</span>
                    <div className="vertify_notice">验证获得200银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">verify</a>
                      <Tooltip placement="right" title={Tooltip2}>
                      <i className="fa fa-info-circle"></i>
                      </Tooltip>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="title">Mobile：</div>
                    <span className="user_name">15884785152</span>
                    <div className="vertify_notice">验证获得300银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">verify</a>
                      <Tooltip placement="right" title={Tooltip3}>
                      <i className="fa fa-info-circle"></i>
                      </Tooltip>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="message_box">

                <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
                  <TabPane tab="訊息" key="1">
                    <MessageList/>
                  </TabPane>
                  <TabPane tab="系統" key="2">
                    <MessageList/>
                </TabPane>
                </Tabs>


              </div>
            </div>
          </div>



            <div className="col-md-9 col-sm-12">
              <div className="coin_money">
                <div className="col-sm-4">
                  <div className="coin_type">

                      <div className="coin_text">
                        <h4>BTC</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="col-sm-4">
                  <div className="coin_type">

                      <div className="coin_text">
                        <h4>ETH</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="col-sm-4">
                  <div className="coin_type">

                      <div className="coin_text">
                        <h4>ADA</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="charge_btn">
                <div className="btn_group">

                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
        </div>
        )
    }
}
