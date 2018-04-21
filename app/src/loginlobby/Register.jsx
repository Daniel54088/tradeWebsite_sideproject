import React from 'react';
import ReactDOM from 'react-dom';
import './loginlobby.css';
import {registerInputCheck} from './InputCheck.js';
import {notification, message} from 'antd';



export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.check = this.check.bind(this);
    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    check(){
      let account = this.refs.account.value;
      let password = this.refs.password.value;
      let passwordConfirm = this.refs.passwordConfirm.value;
      let recommand = this.refs.recommand.value;

      let isPass = registerInputCheck(account,password,passwordConfirm,recommand);  //從 InputCheck.js轉過來的檢查function


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
          <section className="login_lobby register">
            <div className="lobby_content">
              <div className="con-toparea">
                <div className="titleimg"></div>
              </div>
              <div className="lobbybox">
                  <p>
                    <span className="necessary">*</span>　用户名：
                  </p>
                  <div className="form_group">
                    <input type="text"  className="input_mainpg" ref="account" placeholder="6-14字符长的字母或数字组合"/>

                  </div>
                  <p>
                    <span className="necessary">*</span>密　　码：
                  </p>
                  <div className="form_group ">
                    <input type="password" className="input_mainpg" ref="password" placeholder="不可为特殊符号的6-14的字符"/>

                  </div>
                  <p>
                    <span className="necessary">*</span>确认密码：
                  </p>
                  <div className="form_group">
                    <input type="password" className="input_mainpg" ref="passwordConfirm" placeholder="不可为特殊符号的6-14的字符"/>

                  </div>
                  <p>
                    推荐代码：
                  </p>
                  <div className="form_group">
                    <input type="text" className="input_mainpg" ref="recommand" placeholder="请输入您的推荐代码"/>
                  </div>
                  <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>

              <div className="bottomarea">
                <p>当您按下提交，您已确认您已满18岁，并同意火竞猜的<a href="#">条款</a>及 Cookie 政策</p>
                <a className="btndefault registerbtn" onClick={this.check}>注册</a>
              </div>
              <div className="clearfix"></div>
            </div>
          </section>

        </main>
        )
    }
}
