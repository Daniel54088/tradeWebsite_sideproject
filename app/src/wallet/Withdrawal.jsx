import React from 'react';
import AddNewAccount from './component/AddNewAccount.jsx';

export default class Withdrawal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

      return (
        <div className="content2 wallet_bg">
            <div style={{height: '30px'}}></div>
            <h6>单笔提款最低：<span>20元起</span>，最高金额 ：<span>50,000元</span></h6>
            <div className="wallet_save_input">
                <div className="wallet_saveAmount">
                    <p>提款金额：</p>
                </div>
                <div className="form_group has_error">
                    <input type="text" className="input_mainpg" name="loginID" placeholder="请输入您的提款金额"/>
                </div>
            </div>
            <div className="wallet_save_input">
                <div className="wallet_saveAmount">
                    <p>首选账户：</p>
                </div>
                <select id="safe_select" className="input_mainpg">
                    <option value="default">请选择</option>
                </select>
                <div className="bouns_bottomline botom2">
                    <label className="hero button" htmlFor="lightbox-1">
                        <div id="window-yo">
                            <p  data-toggle="modal" data-target="#AddNewAccountModal"><i className="fa fa-plus-square"></i>新增其他帐户</p>
                            <AddNewAccount/>
                        </div>
                    </label>
                </div>
            </div>
            <p className="error_msg">提款人姓名务必与您个人资料中的真实姓名相同</p>
            <div className="wallet_lottery">
                <h5>您的首选帐户</h5>
                <div>
                    <div className="wallet_ggaccount2">
                        <ul>
                            <li className="wallet_list_right">账户持有者全名：</li>
                            <li>王大明</li>
                        </ul>
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
            <div className="btncenter wallet_tab_lv2 padding_20">
                <a href="" className="btndefault">提交</a>
            </div>

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
        )
    }
}
