import React from 'react';
import {Link } from 'react-router';
import {Spin,Tabs,notification, message} from 'antd'; //等待選轉組件
const TabPane = Tabs.TabPane;
import './loginlobby.css';
import {cx} from '../mutipleClass.js'; //多classname 方法
import {forgetPassword_Step1Check, forgetPassword_Step2Check,forgetPassword_Step3Check} from './InputCheck.js'; //確認input輸入


export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeKey:'1',
          pendingtime: 30,
          unsendable: false,

        }
        this.next = this.next.bind(this);
        this.finish = this.finish.bind(this);
        this.verifyMessage = this.verifyMessage.bind(this);
    }




    next(e){ //下一步
      let step  = e.target.name; //抓到目前是哪一步驟驗證

      if(step == 1){  //第一步驟檢查
        let account = this.refs.account.value;
        let phone = this.refs.phone.value;
        let isPass = forgetPassword_Step1Check(account,phone);

        if(!isPass.status){   //如果有檢察錯誤
           notification.config({top: 80});
           notification.error({
             message: isPass.message,
             duration: 3,
           });
           return;
        }

      }else{  //第二步驟檢查

        let verifycode = this.refs.verifycode.value;
        let isPass = forgetPassword_Step2Check(verifycode);

        if(!isPass.status){   //如果有檢察錯誤
           notification.config({top: 80});
           notification.error({
             message: isPass.message,
             duration: 3,
           });
           return;
        }

        //這裡做 ajax 驗證碼的檢查 ;
      }


      this.setState({activeKey: String(Number(this.state.activeKey)+1) });

    }//end of next function




    verifyMessage(){ //發送驗證簡訊
      alert('已發送簡訊');
      let myTimer = setInterval(function(){
        if(this.state.pendingtime > 0){
          this.setState({ pendingtime : this.state.pendingtime - 1, unsendable: true});
        }else{
          this.setState({ pendingtime :30, unsendable: false});
          clearInterval(myTimer);
        }
        }.bind(this), 1000);

    }// end of verifyMessage



    finish(){
        let newPassword = this.refs.newPassword.value;
        let confirmPassword = this.refs.confirmPassword.value;
        let isPass = forgetPassword_Step3Check(newPassword, confirmPassword);

        if(!isPass.status){   //如果有檢察錯誤
           notification.config({top: 80});
           notification.error({
             message: isPass.message,
             duration: 3,
           });
           return;
        }

        alert("成功");
    }


    render() {
      //控制每個階段的css
      let step1Class = cx({'step': true, 'first': true, 'active': this.state.activeKey == '1', 'complete': this.state.activeKey == '2' || this.state.activeKey == '3'});
      let step2Class = cx({'step': true, 'first': true, 'active': this.state.activeKey == '2', 'complete': this.state.activeKey == '3', 'empty':this.state.activeKey == '1'});
      let step3Class = cx({'step': true, 'first': true, 'active': this.state.activeKey == '3', 'empty': this.state.activeKey == '1' || this.state.activeKey == '2'});

      return (
        <main>
          <section className="login_lobby forget">
            <div className="con-toparea">
              <div className="titleimg"></div>
              <div className={step1Class}><span>01</span><p>确认手机号码</p></div>
              <div className={step2Class}><span>02</span><p>验证</p></div>
              <div className={step3Class}><span>03</span><p>重置密码</p></div>
            </div>
            <div className="clearfix"></div>

            <div className="lobbybox">
              <div className="flexslider">
                <ul className="slides">
                <Tabs activeKey={this.state.activeKey} >

                  <TabPane tab="1" key="1">
                  <li>
                    <p>
                      <span className="necessary">*</span>用户名：
                    </p>
                    <div className="form_group">
                      <input type="text"  className="input_mainpg" ref="account" name="loginID" placeholder="请输入您的帐号名称"/>
                    </div>
                    <p>
                      <span className="necessary">*</span>手机号码：
                    </p>
                    <div className="form_group">
                      <input type="text"  className="input_mainpg" ref="phone"  name="loginID" placeholder="请输入您的手机号码"/>
                    </div>

                    <div className="clearfix"></div>
                      <div className="bottomarea">
                        <div className="custom-navigation">
                          <a  className="flex-next btndefault" onClick={this.next} name="1">下一步</a>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                  </li>
                  </TabPane>


                  <TabPane  tab="2" key="2">
                  <li className="phone_verify">
                    <p>
                      您的手机号码：
                    </p>
                    <p className="user_phonenumber">123 ***** 789</p>
                    <p>验证码</p>
                    <div className="form_group ">
                      <input type="text" ref="verifycode" className="input_mainpg"/>
                      <a  id="send_verify" className="btnsys" disabled={this.state.unsendable} onClick={this.verifyMessage}>發送({this.state.pendingtime})</a>
                      <div className="clearfix"></div>
                    </div>

                    <div className="bottomarea">
                      <div className="custom-navigation">
                        <a  className="flex-next btndefault" onClick={this.next} name="2">下一步</a>
                      </div>
                      <div className="clearfix"></div>
                    </div>

                  </li>
                  </TabPane>

                  <TabPane tab="3" key="3">
                  <li>
                    <p>
                      <span className="necessary">*</span>新密码：
                    </p>
                    <div className="form_group ">
                      <input type="text"  className="input_mainpg" ref="newPassword" name="loginID" placeholder="请输入您的帐号名称"/>
                    </div>
                    <p>
                      <span className="necessary">*</span>确认新密码：
                    </p>
                    <div className="form_group">
                      <input type="text"  className="input_mainpg" ref="confirmPassword" name="loginID" placeholder="请输入您的帐号名称"/>
                    </div>
                    <div className="clearfix"></div>

                      <div className="bottomarea">
                        <div className="custom-navigation">
                          <a  className="flex-next btndefault" onClick={this.finish} >提交</a>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                  </li>
                 </TabPane>

                </Tabs>
               </ul>
              </div>
            </div>

            <div className="clearfix"></div>
          </section>
        </main>
        )
    }
}
