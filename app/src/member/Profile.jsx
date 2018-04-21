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
          <div className="col-lg-12 col-sm-12">
            <div className="col-lg-8 col-sm-12">
              <div className="all_info">
                <div className="head_sec">
                  <div className="avatar" style={{background:"url('http://placehold.it/100x100')"}}></div>
                  <span className="user_name">skylying</span>
                  <div className="btn_group">
                    <Link to={`/memberset`} className="btnsys"><i className="fa fa-edit"></i>编辑个人档案</Link>
                    <a href="#" className="btnsys"><i className="fa fa-lock"></i>修改密码</a>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="info_sec">
                  <div className="info_row">
                    <div className="title">真实姓名：</div>
                    <span className="user_name">梅友仁</span>
                    <div className="vertify_notice">验证获得500银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">验证</a>
                      <Tooltip placement="right" title={Tooltip1}>
                      <i className="fa fa-info-circle"></i>
                      </Tooltip>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="title">信　　箱：</div>
                    <span className="user_name">asdjwiosadhhoifh@qq.com</span>
                    <div className="vertify_notice">验证获得200银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">验证</a>
                      <Tooltip placement="right" title={Tooltip2}>
                      <i className="fa fa-info-circle"></i>
                      </Tooltip>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="title">手　　机：</div>
                    <span className="user_name">15884785152</span>
                    <div className="vertify_notice">验证获得300银币</div>
                    <div className="btn_group">
                      <a href="#" className="btnsys">验证</a>
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

            <div className="btn_group">
              <a className="how_play" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-info-circle"></i>各种币别怎么玩？</a>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        <div className="click_modal coin_rule">
                            <div className="title_bar">
                              各种币值
                            </div>
                            <h2><img  src={require('../images/main/sliver_img.png')}/>银币相关规则</h2>
                            <ul className="rule_list">
                              <li>新会员注册送1000银币，可到常规任务区点选「领取」。</li>
                              <li>每日凌晨06:00将自动审核帐户内银币数，若银币低于500者，则自动补足至500，高于500银币者，则保持原数值。</li>
                              <li>银币可投注趣味竞猜银币盘，参与投注则可自动排名于银币获利排行榜，并取得相对应奖励，详细规则与奖励已相关排行榜公告为准。</li>
                              <li>每季银币数量将重置到1000银币，排行榜积分将重新累积。</li>
                            </ul>
                            <h2><img src={require('../images/main/gold_img.png')}/ >金币相关规则</h2>
                            <ul className="rule_list">
                              <li>会员充值后将1比1转成帐户中的金币。</li>
                              <li>金币能畅游站内所有竞猜盘，参与投注即可自动排名于金币获利排行榜，并取得相对应奖励，详细规则与奖励以相关排行榜公告为准。</li>
                            </ul>
                            <h2><img src={require('../images/main/rocket_img.png')}/ >火箭币相关规则</h2>
                            <ul className="rule_list">
                              <li>会员每下注10金币可得1火箭币，火箭币由系统自动派发。</li>
                              <li>火箭幣可使用於火競猜商城兌換禮品。</li>
                            </ul>
                        </div>
                        <div className="btn_group">
                          <a href="#" className="btndefault" data-dismiss="modal">我知道了</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-9 col-sm-12">
              <div className="coin_money">
                <div className="col-sm-4">
                  <div className="coin_type">
                    <img  src={require('../images/main/gold_img.png')} alt="金币持有数"/>
                      <div className="coin_text">
                        <h4>金币</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="col-sm-4">
                  <div className="coin_type">
                    <img src={require('../images/main/sliver_img.png')} alt="银币持有数"/>
                      <div className="coin_text">
                        <h4>银币</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="col-sm-4">
                  <div className="coin_type">
                    <img  src={require('../images/main/rocket_img.png')} alt="火箭币持有数"/>
                      <div className="coin_text">
                        <h4>火箭币</h4>
                        <p>1,999,999,999</p>
                      </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="charge_btn">
                <div className="btn_group">
                  <a href="#"><img  src={require('../images/member/wallet/deposit_btn.png')} /></a>
                  <a href="#"><img  src={require('../images/member/wallet/withdrawal_btn.png')} /></a>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
        </div>
        )
    }
}
