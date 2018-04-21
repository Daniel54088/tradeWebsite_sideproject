import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory } from 'react-router';
import './loginlobby.css';
import {loginInputCheck} from './InputCheck.js';
import {notification, message} from 'antd';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.check = this.check.bind(this);
    }

    check(){
      let account = this.refs.account.value;
      let password = this.refs.password.value;

      let isPass = loginInputCheck(account,password);  //從 InputCheck.js轉過來的檢查function


     if(!isPass.status){   //如果有檢察錯誤
        notification.config({top: 80});
        notification.error({
          message: isPass.message,
          duration: 3,
        });

        return;
     }

     console.log('checked');
    }//end of check





    render() {

      return (
        <main>

          <section className="login_lobby login">
            <div className="lobby_content">
              <div className="con-toparea">
                <div className="titleimg"></div>
              </div>
              <div className="lobbybox">
                  <p>
                    <span className="necessary">*</span>用户名：
                  </p>
                  <div className="form_group">
                    <input type="text"  className="input_mainpg" ref="account" name="loginID" placeholder="请输入您的帐号名称"/>
                  </div>
                  <p>
                    <span className="necessary">*</span>密　码：
                  </p>
                  <div className="form_group">
                    <input type="password" className="input_mainpg" ref="password" name="loginID" placeholder="请输入您的密码"/>
                  </div>
                  <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>

              <div className="bottomarea">
                <a className="btndefault loginbtn" onClick={this.check}>登录</a>
                <hr/>
                <div className="clearfix"></div>
                <Link className="btndefault registerbtn" to={`/register`}>注册</Link>


                <Link id="forget_pwd" to={`/forgetpassword`}>找回密码</Link>
              </div>
            </div>
          </section>


        </main>
        )
    }
}
