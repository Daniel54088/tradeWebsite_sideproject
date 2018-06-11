import React from 'react';
import {Link } from 'react-router';
import {notification,Steps, Button, message } from 'antd'; //等待選轉組件
const Step = Steps.Step;
import './loginlobby.css';
import {forgetPassword_Step1Check, forgetPassword_Step2Check,forgetPassword_Step3Check} from './InputCheck.js'; //確認input輸入




export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pendingtime: 30,
          unsendable: false,
          current:0,
        }
        this.next = this.next.bind(this);
        this.finish = this.finish.bind(this);
        this.verifyMessage = this.verifyMessage.bind(this);
    }




    next(e){ //下一步

      if(this.state.current == 0){ //第一步檢查
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
      }

    const current = this.state.current + 1;
    this.setState({ current:current });

    }//end of next function

    verifyMessage(){ //發送驗證簡訊
       message.success('verification code send!')
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
          message.success('Processing complete!');
      }


    render() {

const steps = [
  {
    title: 'First',
    description: 'Enter information',
    content:<div id="1">
        <p>
          <span className="necessary">*</span>Account：
        </p>
        <div className="form_group">
          <input type="text" className="input_mainpg" ref="account" style={{'width':'100%'}}  placeholder="Please enter account"/>
        </div>
        <p>
          <span className="necessary">*</span>Mobile number：
        </p>

        <div className="form_group">
          <input type="text" className="input_mainpg" ref="phone" style={{'width':'100%'}} placeholder="Please enter mobile number"/>
        </div>

        <div className="clearfix"></div>
        </div>
  }, {
    title: 'Second',
    description: 'Mobile phone verification',
    content:
    <div id="2">
        <p>
          Your Mobile ：
        </p>
        <p className="user_phonenumber">123 ***** 789</p>
          <span className="necessary">*</span>Verification code
        <div className="form_group">
          <input type="text" ref="verifycode" className="input_mainpg" style={{'width':'100%'}} placeholder="Enter verification code"/>
          <a id="send_verify" className="btnsys" disabled={this.state.unsendable} onClick={this.verifyMessage}>Send({this.state.pendingtime})</a>
          <div className="clearfix"></div>
        </div>
    </div>
  }, {
    title: 'Last',
    description: 'Set new password',
    content:
    <div id="3">
        <p>
          <span className="necessary">*</span>New password：
        </p>
        <div className="form_group">
          <input type="password" className="input_mainpg" ref="newPassword" style={{'width':'100%'}} placeholder="Please enter new password"/>
        </div>
        <p>
          <span className="necessary">*</span>Confirm password：
        </p>

        <div className="form_group">
          <input type="password" className="input_mainpg" ref="confirmPassword" style={{'width':'100%'}} placeholder="Please type again"/>
        </div>
        <div className="clearfix"></div>
    </div>
  }
];

      return (
        <main>
          <section className="container ">
            <div className="clearfix"></div>
              <div className="col-md-12 content" style={{'marginTop':'30px'}}>
                     <Steps current={this.state.current}>
                       {steps.map(item => <Step key={item.title} title={item.title}  description={item.description} />)}
                     </Steps>
                     <div className="steps-content">
                       <div className="col-md-4 col-xs-1"></div>
                       <div className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-1" style={{'marginBottom':'20px'}}>
                        {steps[this.state.current].content}
                        <div className="steps-action">
                         {
                            this.state.current < steps.length - 1
                           &&
                           <Button type="primary"  onClick={() => this.next()}>Next</Button>
                         }
                         {
                           this.state.current === steps.length - 1
                           &&
                           <Button type="primary" onClick={() => this.finish()}>Done</Button>
                         }

                       </div>
                      </div>
                      <div className="col-md-4 col-xs-1"></div>
                     </div>
                   </div>
            <div className="clearfix"></div>
          </section>
        </main>
        )
    }
}
