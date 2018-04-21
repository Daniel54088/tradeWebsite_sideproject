import React from 'react';
import BonusDetail from './component/BonusDetail.jsx';
import { Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class Deposit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          nowPage:this.props.depositCategory ,
        }
        this.callback = this.callback.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.depositCategory != this.props.depositCategory && nextProps.depositCategory != undefined){ //如果有傳不同的props 就rerender組件，來自上方的下拉式選單
        this.setState({nowPage: nextProps.depositCategory});
        return;
      }

    }

    callback(key){

      //更換tab就重新reload該頁面
      if(key == 1){
        this.setState({nowPage:'1'});
        browserHistory.push('/wallet/deposit_bank');
      }else if(key == 2){
        this.setState({nowPage:'2'});
        browserHistory.push('/wallet/deposit_qqpay');
      }else if(key == 3){
        this.setState({nowPage:'3'});
        browserHistory.push('/wallet/deposit_localbank');
      }else if(key == 4){
        this.setState({nowPage:'4'});
        browserHistory.push('/wallet/deposit_card');
      }

    }

    render() {

      return (
        <div className="row wallet">
            <div className="col-md-10 col-md-offset-1">
                <div className="content2 wallet_bg">
                     <BonusDetail/>
                   <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
                     <TabPane tab="在线存款" key="1">
                      <h6>单笔存款最低：<span>10元起</span>，最高金额 ：<span>50,000元</span></h6>
                      <div className="wallet_save_input">
                        <div className="wallet_saveAmount">
                            <p>存款金额：</p>
                        </div>
                        <div className="form_group has_error">
                            <input type="text" className="input_mainpg" name="loginID" placeholder="请输入您的存款金额"/>
                        </div>
                    </div>
                    <div className="clearfix">
                        <div className="wallet_lottery">
                            <h5>优惠红利火热开跑中，请选择一个您想参与的红利方案</h5>
                            <div className="bouns_bottomline">
                                <label className="hero button" htmlFor="lightbox-1">
                                    <div id="window-yo">
                                        <p data-toggle="modal" data-target="#BonusModal"><i className="fas fa-exclamation-circle"></i>详细说明</p>

                                    </div>
                                </label>
                            </div>
                            <ul className="wallet_lottery_left">
                                <li>
                                    <input type="radio" aria-label="..."/>
                                </li>
                                <li>
                                    <p>优惠方案 A：10% 首存紅利，最高 688，10 倍流水</p>
                                </li>
                            </ul>
                            <ul className="wallet_lottery_left">
                                <li>
                                    <input type="radio" aria-label="..."/>
                                </li>
                                <li>
                                    <p>优惠方案 B：30% 首存紅利，最高 1688，30 倍流水</p>
                                </li>
                            </ul>
                            <ul className="wallet_lottery_left">
                                <li>
                                    <input type="radio" aria-label="..."/>
                                </li>
                                <li>
                                    <p> 下回再参与</p>
                                </li>
                            </ul>
                        </div>
                        </div>

                        <div className="payment_note clearfix">
                            <h5>火竞猜小帮手温馨提醒</h5>
                            <ol>
                                <li>会员可使用您的银联卡，维萨卡(VISA)或万事达卡(MasterCard)进行存款。 </li>
                                <li>只需输入符合要求的存款金额，点击提交即可操作。 </li>
                                <li>到帐时间通常约1-10分钟。</li>
                            </ol>
                            <hr/>
                            <div className="btncenter"><a href="" className="btndefault">提交</a></div>
                        </div>
                        </TabPane>



                        <TabPane tab="QQ支付" key="2">
                         <h6>单笔存款最低：<span>10元起</span>，最高金额 ：<span>50,000元</span></h6>
                         <div className="wallet_save_input">
                           <div className="wallet_saveAmount">
                               <p>存款金额：</p>
                           </div>
                           <div className="form_group has_error">
                               <input type="text" className="input_mainpg" name="loginID" placeholder="请输入您的存款金额"/>
                           </div>
                       </div>
                       <div className="clearfix">
                           <div className="wallet_lottery">
                               <h5>优惠红利火热开跑中，请选择一个您想参与的红利方案</h5>
                               <div className="bouns_bottomline">
                                   <label className="hero button" htmlFor="lightbox-1">
                                       <div id="window-yo">
                                           <p data-toggle="modal" data-target="#BonusModal"><i className="fas fa-exclamation-circle"></i>详细说明</p>

                                       </div>
                                   </label>
                               </div>
                               <ul className="wallet_lottery_left">
                                   <li>
                                       <input type="radio" aria-label="..."/>
                                   </li>
                                   <li>
                                       <p>优惠方案 A：10% 首存紅利，最高 688，10 倍流水</p>
                                   </li>
                               </ul>
                               <ul className="wallet_lottery_left">
                                   <li>
                                       <input type="radio" aria-label="..."/>
                                   </li>
                                   <li>
                                       <p>优惠方案 B：30% 首存紅利，最高 1688，30 倍流水</p>
                                   </li>
                               </ul>
                               <ul className="wallet_lottery_left">
                                   <li>
                                       <input type="radio" aria-label="..."/>
                                   </li>
                                   <li>
                                       <p> 下回再参与</p>
                                   </li>
                               </ul>
                           </div>
                           </div>

                           <div className="payment_note clearfix">
                               <h5>火竞猜小帮手温馨提醒</h5>
                               <ol>
                                   <li>会员可使用您的银联卡，维萨卡(VISA)或万事达卡(MasterCard)进行存款。 </li>
                                   <li>只需输入符合要求的存款金额，点击提交即可操作。 </li>
                                   <li>到帐时间通常约1-10分钟。</li>
                               </ol>
                               <hr/>
                               <div className="btncenter"><a href="" className="btndefault">提交</a></div>
                           </div>
                           </TabPane>




                           <TabPane tab="本地银行/支付宝" key="3">
                             <h6>单笔存款最低：<span>10元起</span>，最高金额 ：<span>50,000元</span></h6>
                             <div className="clearfix">
                                 <div className="wallet_localbank">
                                     <h4>步骤一：核实火竞猜的账户信息</h4>
                                     <p className="wallet_lottery_p">请务必按照以下提示的银行账户信息进行存款。否则您的存款申请将会受到延迟。</p>
                                     <h5>火竞猜的帐户</h5>
                                     <div className="wallet_ggaccount">
                                         <div className="wallet_ggaccount2">
                                             <ul>
                                                 <li className="wallet_list_right">银行名称：</li>
                                                 <li>招商银行</li>
                                             </ul>
                                             <ul>
                                                 <li className="wallet_list_right">户名：</li>
                                                 <li>覃科</li>
                                             </ul>
                                             <ul>
                                                 <li className="wallet_list_right">账号：</li>
                                                 <li>6214835918384346</li>
                                             </ul>
                                             <ul>
                                                 <li className="wallet_list_right">省／自治区：</li>
                                                 <li>福建</li>
                                             </ul>
                                             <ul>
                                                 <li className="wallet_list_right">城市／城镇：</li>
                                                 <li>福州</li>
                                             </ul>
                                             <ul>
                                                 <li className="wallet_list_right">分行：</li>
                                                 <li>福清支行</li>
                                             </ul>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="content2">
                                     <div style={{'height':30}} ></div>
                                     <h4>步骤二：提交转账信息</h4>
                                     <p className="wallet_lottery_p">若您已经完成转账，请务必提交以下转帐明细，否则，您的存款将<b>不会进入个人钱包。</b></p>
                                     <div className="wallet_save_input">
                                         <div className="wallet_saveAmount">
                                             <p>存款金额：</p>
                                         </div>
                                         <div className="form_group has_error">
                                             <input type="text" className="input_mainpg" name="loginID" placeholder="请输入最低金额以上的整数金额"/>
                                         </div>
                                     </div>
                                     <div className="wallet_save_input">
                                         <div className="wallet_saveAmount">
                                             <p>火竞猜银行账号：</p>
                                         </div>
                                         <div className="form_group has_error">
                                             <input type="text" className="input_mainpg" name="loginID" placeholder="84346"/>
                                         </div>
                                     </div>
                                     <div className="wallet_save_input">
                                         <div className="wallet_saveAmount">
                                             <p>银行类型：</p>
                                         </div>
                                         <select id="safe_select" className="input_mainpg">
                                             <option value="default">请选择</option>
                                         </select>
                                     </div>
                                     <div className="wallet_save_input">
                                         <div className="wallet_saveAmount">
                                             <p>存款人姓名：</p>
                                         </div>
                                         <div className="form_group has_error">
                                             <input type="text" className="input_mainpg" name="loginID" placeholder=""/>
                                         </div>
                                         <div className="bouns_bottomline botom2">
                                             <label className="hero button" htmlFor="lightbox-1">
                                                 <div id="window-yo">
                                                     <p ><i className="fa fa-plus-square"></i>新增帐户</p>
                                                 </div>
                                             </label>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div style={{'height':30}} ></div>
                             <div className="wallet_lottery">
                                 <h5>优惠红利火热开跑中，请选择一个您想参与的红利方案</h5>
                                 <div className="bouns_bottomline">
                                     <label className="hero button" htmlFor="lightbox-1">
                                         <div id="window-yo">
                                              <p data-toggle="modal" data-target="#BonusModal"><i className="fas fa-exclamation-circle"></i>详细说明</p>
                                         </div>
                                     </label>
                                 </div>
                                 <ul className="wallet_lottery_left">
                                     <li>
                                         <input type="radio" aria-label="..."/>
                                     </li>
                                     <li>
                                         <p>优惠方案 A：10% 首存紅利，最高 688，10 倍流水</p>
                                     </li>
                                 </ul>
                                 <ul className="wallet_lottery_left">
                                     <li>
                                         <input type="radio" aria-label="..."/>
                                     </li>
                                     <li>
                                         <p>优惠方案 B：30% 首存紅利，最高 1688，30 倍流水</p>
                                     </li>
                                 </ul>
                                 <ul className="wallet_lottery_left">
                                     <li>
                                         <input type="radio" aria-label="..."/>
                                     </li>
                                     <li>
                                         <p> 下回再参与</p>
                                     </li>
                                 </ul>
                             </div>
                             <div className="payment_note clearfix">
                                 <h5>火竞猜小帮手温馨提醒</h5>
                                 <ol>
                                     <li>会员可使用银行转账, ATM存款转账,银行柜台转账和手机转账等方式进行存款。</li>
                                     <li>仅接受超过存款收据时间24小时的存款单。</li>
                                     <li>本地银行转账受理和到账时间为15-30分钟，追求极速到账会员请使用在线存款。</li>
                                 </ol>
                                 <hr/>
                                 <div className="btncenter"><a href="" className="btndefault">提交</a></div>
                             </div>
                           </TabPane>





                           <TabPane tab="火卡充值" key="4">
                             <h6>单笔存款最低：<span>10元起</span>，最高金额 ：<span>10,000元</span></h6>
                             <div className="wallet_save_input">
                                 <div className="wallet_saveAmount">
                                     <p>存款金额：</p>
                                 </div>
                                 <div className="form_group has_error">
                                     <input type="text" className="input_mainpg" name="loginID" placeholder="请输入1或以上的整數金額"/>
                                 </div>
                             </div>
                             <div className="wallet_save_input">
                                 <div className="wallet_saveAmount">
                                     <p>火卡序号：</p>
                                 </div>
                                 <div className="form_group has_error">
                                     <input type="text" className="input_mainpg" name="loginID" placeholder="请输入16位火卡序列号"/>
                                 </div>
                             </div>
                             <div className="wallet_save_input">
                                 <div className="wallet_saveAmount">
                                     <p>火卡密码：</p>
                                 </div>
                                 <div className="form_group has_error">
                                     <input type="text" className="input_mainpg" name="loginID" placeholder="请输入10位火卡密码"/>
                                 </div>
                             </div>
                             <div className="clearfix">
                                 <div className="wallet_lottery">
                                     <h5>优惠红利火热开跑中，请选择一个您想参与的红利方案</h5>
                                     <div className="bouns_bottomline">
                                         <label className="hero button" htmlFor="lightbox-1">
                                             <div id="window-yo">
                                                 <p data-toggle="modal" data-target="#BonusModal"><i className="fas fa-exclamation-circle"></i>详细说明</p>
                                             </div>
                                         </label>
                                     </div>
                                     <ul className="wallet_lottery_left">
                                         <li>
                                             <input type="radio" aria-label="..."/>
                                         </li>
                                         <li>
                                             <p>优惠方案 A：10% 首存紅利，最高 688，10 倍流水</p>
                                         </li>
                                     </ul>
                                     <ul className="wallet_lottery_left">
                                         <li>
                                             <input type="radio" aria-label="..."/>
                                         </li>
                                         <li>
                                             <p>优惠方案 B：30% 首存紅利，最高 1688，30 倍流水</p>
                                         </li>
                                     </ul>
                                     <ul className="wallet_lottery_left">
                                         <li>
                                             <input type="radio" aria-label="..."/>
                                         </li>
                                         <li>
                                             <p> 下回再参与</p>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="payment_note clearfix">
                                     <h5>火竞猜小帮手温馨提醒</h5>
                                     <ol>
                                         <li>通过第三方供应商方便地购买现金卡，匿名存款，不泄露您的银行详细信息。</li>
                                         <li>审查批准时间为15分钟。</li>
                                     </ol>
                                     <hr/>
                                     <div className="btncenter"><a href="" className="btndefault">提交</a></div>
                                 </div>
                               </div>
                           </TabPane>

                      </Tabs>

                        <div className="wallet_service">
                            <h5>如您遇到任何疑问，请您与我们客服部联系哦。</h5>
                            <ul>
                                <i className="far fa-file-alt fa-1x"></i>
                                    <li>
                                        <p>点击<a href=""><u>联繫我们</u></a>留下信息吧。</p>
                                    </li>
                            </ul>
                            <ul>
                                <li><i className="far fa-envelope fa-1x"></i></li>
                                <li>
                                    <p>电子邮件：<a href="mailto:"><u>cs@ggcarry.com</u></a></p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
