import React from 'react';
import './contact.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    
    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    render() {

      return (
        <main className="change_password contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
                <div className="contact_wrap">
                  <div className="contact_box">
                    <div className="contact_head">
                      <img  src={require('../images/contact/contact_title.png')}/>
                    </div>
                    <div className="col-xs-5">

                      <div className="caption">
                        <h4><i className="fas fa-star"></i>火竞猜客服提醒：</h4>
                        假如您有任何建议，我们都乐意聆听，请填写以下表格来提供您宝贵的回馈，我们会在一个工作天内回覆。
                      </div>
                    </div>
                    <div className="col-xs-7">
                      <div className="contact_content">
                        <div className="form_row">
                          <div className="form_group">
                            <label htmlFor="name">姓名：</label>
                            <input id="name"type="text" className="input_mainpg" placeholder="请输入您的姓名"/>
                          </div>
                          <div className="form_group">
                            <label htmlFor="tel_num">电话号码：</label>
                            <input id="tel_num" type="tel" className="input_mainpg" placeholder="请输入您的电话号码"/>
                          </div>
                        </div>
                        <div className="form_group">
                          <label htmlFor="email_addr">邮箱：</label>
                          <input id="email_addr" type="email" className="input_mainpg" placeholder="请输入您的邮箱"/>
                        </div>
                        <div className="form_group">
                          <label htmlFor="question_area">填写问题：</label>
                          <textarea id="question_area" rows="10" cols="80" placeholder="请填写您的询问"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="btngroup">
                      <a href="javascript:void(0)" className="btndefault">送出</a></div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </main>
        )
    }
}
