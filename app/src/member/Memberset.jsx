import React from 'react';
import {Link, browserHistory } from 'react-router';


export default class Memberset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }

    render() {

      return (
        <main>
          <section className="member setting">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <div className="title_bar">
                    <span>个人资料更新</span>
                  </div>

                  <div className="setting_form">
                    <div className="col-md-3 col-sm-12">

                      <div className="avatar"    style={{background:"url('http://placehold.it/150x150')"}}>
                        <a href="#"><i className="fa fa-edit"></i>修改头像</a>
                      </div>
                      <p className="user_name">skylying</p>
                    </div>
                    <div className="col-md-9">
                      <div className="form_group">
                        <label htmlFor="ture_name">真实姓名：</label>
                        <div className="form_item">
                          <input id="ture_name" className="input_mainpg" type="text" placeholder="请输入真实姓名"/>
                          <ul className="tip_list">
                            <li>当您提款时，我们必须核对您的银行帐户姓名与您个人资料中的真实姓名是否相符，若您没有提供真实姓名，提款程序便无法完成</li>
                            <li>您只能输入一次真实姓名，若需要修改请联系客服小天使</li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <label htmlFor="ture_name">生　　日：</label>
                        <div className="form_item">
                          <input id="birthday" className="input_mainpg" type="text"/>
                          <i className="far fa-calendar-alt"></i>
                          <ul className="tip_list">
                            <li>您只能输入一次生日，若需要修改请联系客服小天使</li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <label htmlFor="mail">邮　　箱：</label>
                        <div className="form_item">

                          <a href="#" id="vertify_mail" className="btnsys"><i className="fa fa-envelope"></i> 绑定邮箱</a>
                          <ul className="tip_list">
                            <li>我们会寄送火竞猜每月精彩活动通知给您</li>
                            <li>火競猜客服小天使能更快速的聯繫上您</li>
                            <li>各种专属优惠能更确实迅速送达您手中</li>
                            <li>您只能输入一次邮箱，若需要修改请联系客服小天使</li>
                          </ul>


                         <input id="mail" className="input_mainpg" type="email" value="abc_nobody123@qq.com" disabled/>
                          <ul className="tip_list">
                            <li className="checked"><i className="fa fa-check-circle"></i> 已验证</li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <label htmlFor="mail">手　　机：</label>
                        <div className="form_item">

                          <a href="#" id="vertify_phone" className="btnsys"><i className="fa fa-mobile"></i> 绑定手机</a>
                          <ul className="tip_list">
                            <li>验证手机能帮助您找回密码，以及将来协助您确认身份</li>
                          </ul>

                        <input id="phone" className="input_mainpg" type="tel" disabled value="+886912345678"/>
                          <a href="#" className="btnsys"><i className="fa fa-mobile"></i>绑定新手机</a>
                          <ul className="tip_list">
                            <li className="checked"><i className="fa fa-check-circle"></i> 已验证</li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <label>性　　别：</label>
                        <div className="form_item">
                          <label htmlFor="male">男</label>
                          <input id="male" type="radio" name="gender"/>
                          <label htmlFor="female">女</label>
                          <input id="female" type="radio" name="gender"/>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="btn_group">

                      <a href="#" className="btndefault" id="submit_form">提交</a>
                      <div className="clearfix"></div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        )
    }
}
