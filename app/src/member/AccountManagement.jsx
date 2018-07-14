import React from 'react';
import { Modal } from 'antd';


export default class AcccountManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {

      return (
        <div className="account_manage">
          <div className="col-sm-12">
            <a  className="btnsys" data-toggle="modal" data-target="#exampleModal2"><i className="fa fa-plus-square"></i>Create new Account</a>

              <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div className="click_modal add_account">
                          <div className="title_bar">
                            New Account
                          </div>
                          <div className="form_group">
                            <label htmlFor="ture_name">True Name：</label>
                            <div className="form_item">
                              <input id="ture_name" className="input_mainpg" type="text" placeholder="请输入真实姓名"/>
                            </div>
                          </div>
                          <div className="form_group has_error">
                            <label htmlFor="account_owner">帐户持有者全名：</label>
                            <div className="form_item">
                              <input id="account_owner" className="input_mainpg" type="text" placeholder="请输入帐户持有者全名"/>
                              <ul className="tip_list">
                                <li>提款人姓名务必与您个人资料中的真实姓名相同</li>
                              </ul>
                              <p className="error_meg">請輸入帐户持有者全名！</p>
                            </div>
                          </div>
                          <div className="form_group">
                            <label htmlFor="account_num">银行帐户号码：</label>
                            <div className="form_item">
                              <input id="account_num" className="input_mainpg" type="text" placeholder="请输入银行帐户号码"/>
                            </div>
                          </div>
                          <div className="form_group">
                            <label htmlFor="user_area">省/自治区：</label>
                            <div className="form_item">
                              <input id="user_area" className="input_mainpg" type="text" placeholder="请输入省/自治区"/>
                            </div>
                          </div>
                          <div className="form_group">
                            <label htmlFor="user_city">城市/城镇：</label>
                            <div className="form_item">
                              <input id="user_city" className="input_mainpg" type="text" placeholder="请输入城市/城镇"/>
                            </div>
                          </div>
                          <div className="form_group">
                            <label htmlFor="bank_local">分行：</label>
                            <div className="form_item">
                              <input id="bank_local" className="input_mainpg" type="text" placeholder="请输入分行"/>
                            </div>
                          </div>

                      </div>
                    </div>
                    <div className="modal-footer">
                        <div className="btn_group"><a href="#" className="btndefault" data-dismiss="modal">提交</a></div>
                    </div>
                  </div>
                </div>
              </div>


            <div className="clearfix"></div>
            <div className="account_list">
              <div className="account_item default">
                <div className="name">Daniel Wang</div>
                <div className="num">621-483-591-838-4346</div>
                <div className="account_local">
                  <div className="bank">
                      <span>ANZ</span>
                      <span>York and Market St</span>
                  </div>
                  <div className="bank_location">Sydney NSW 2000</div>
                </div>
                <div className="check_default">
                  <i className="fa fa-check-circle"></i>Default
                </div>
              </div>
              <div className="account_item">
                <div className="name">Daniel Wang</div>
                <div className="num">621-483-591-838-4346</div>
                <div className="account_local">
                  <div className="bank">
                      <span>NAB</span>
                      <span>Swanston St</span>
                  </div>
                  <div className="bank_location">Melbourne VIC 3000</div>
                </div>
                <div className="check_default">
                  <i className="fa fa-check-circle"></i>默认
                </div>
              </div>
              <div className="account_item">
                <div className="name">Daniel Wang</div>
                <div className="num">621-483-591-838-4346</div>
                <div className="account_local">
                  <div className="bank">
                      <span>Commonwealth</span>
                      <span>Queen Street Mall</span>
                  </div>
                  <div className="bank_location">Brisbane QLD 4000</div>
                </div>
                <div className="check_default">
                  <i className="fa fa-check-circle"></i>默认
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        )
    }
}
