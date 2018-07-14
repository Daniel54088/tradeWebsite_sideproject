import React from 'react';
import {Link, browserHistory } from 'react-router';
import './loginlobby.css';
import {loginInputCheck} from './InputCheck.js';
import {notification, message} from 'antd';

export default class SignIn extends React.Component {
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


    }//end of check





    render() {

      return (
        <main>
          <div className="join_style" id="signin">
            <div className="container content">
               <div className="row" style={{'padding':'20px 0px 20px 0px','marginBottom':'50px'}}>
                <div className="col-md-3 col-xs-1">

                </div>

                <div className="col-md-6 col-md-offset-0 col-xs-12 " style={{marginTop:'50px',marginBottom:'30px'}}>

                    <div className="caption">

                        <h4>Sign In</h4>
                        <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>
                    </div>

                    <div className="register_content">
                        <p>
                            Name<span className="necessary">*</span>
                        </p>
                        <div className="form_group">
                            <input type="text" className="input_mainpg" ref="account" placeholder="your name"/>
                        </div>
                    </div>

                    <div className="register_content">
                        <p>
                            Password<span className="necessary">*</span>
                        </p>
                        <div className="form_group">
                            <input type="password" className="input_mainpg" ref="password" placeholder="password"/>

                        </div>
                    </div>

                    <div className="btngroup">
                        <a className="btndefault" onClick={this.check}>Sign in</a>
                    </div>
                    <div className="btngroup">
                        <a className="btndefault registerbtn" onClick={this.check}>Sign up</a>
                    </div>
                    <div className="loginLink" >
                      <Link to={`forgetpassword`}  id="forget_btn">
                          <span>Forget password？</span>
                      </Link>
                    </div>

                    <div className="loginLink" >
                      <Link to={`register`} id="forget_btn">
                          <span style={{'textAlign': 'center'}} >Create new account!</span>
                      </Link>
                    </div>

                </div>

                <div className="col-md-3 col-xs-1">
                </div>
            </div>
        </div>
    </div>

        </main>
        )
    }
}
