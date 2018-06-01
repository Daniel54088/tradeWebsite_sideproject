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
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      let passwordConfirm = this.refs.passwordConfirm.value;
      let recommand = 0;

      let isPass = registerInputCheck(account,email,password,passwordConfirm,recommand);  //從 InputCheck.js轉過來的檢查function


      if(!isPass.status){   //如果有檢察錯誤
        notification.config({top: 80});
        notification.error({
          message: isPass.message,
          duration: 3,
        });
        return;
       }

       notification.success({
         message: 'Rigister Success!!',
         duration: 3,
       });

    }//end of check


    render() {

      return (
        <main>
          <div className="join_style" id="signin">
            <div className="container content">
               <div className="row" style={{'padding':'20px 0px 20px 0px'}}>
                <div className="col-md-3 col-xs-1">

                </div>

                <div className="col-md-6 col-md-offset-0 col-xs-8 col-xs-offset-1">

                    <div className="caption">

                        <h4>Register</h4>
                        <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>
                    </div>
                    <div className="register_content">
                        <p>
                            Account<span className="necessary">*</span>
                        </p>
                        <div className="form_group">
                            <input type="text" className="input_mainpg" ref="account" placeholder="6-14 characters"/>
                        </div>
                    </div>
                    <div className="register_content">
                        <p>
                            E_Mail<span className="necessary">*</span>
                        </p>
                        <div className="form_group">
                            <input type="text" className="input_mainpg" ref="email" placeholder="your Email"/>

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
                    <div className="register_content">
                        <p>
                            ConfirmPassword<span className="necessary">*</span>
                        </p>
                        <div className="form_group">
                            <input type="password" className="input_mainpg" ref="passwordConfirm" placeholder="type again"/>

                        </div>
                    </div>

                    <div className="btngroup">
                        <a className="btndefault registerbtn" onClick={this.check}>sent</a>
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
