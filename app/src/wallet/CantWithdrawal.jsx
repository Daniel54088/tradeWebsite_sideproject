import React from 'react';
import { Link} from 'react-router';

export default class CantWithdrawal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }


    render() {

      return (
        <div className="content2 wallet_bg">
            <div style={{height: '30px'}}></div>
            <h6>单笔提款最低：<span>20元起</span>，最高金额 ：<span>50,000元</span></h6>
            <div>
                <div className="wallet_attest">
                    <div className="payment_note clearfix">
                        <div className="wallet_attest_3">
                            <div><i className="fas fa-user-circle fa-1x"></i>
                                <h5>真实姓名</h5></div>
                            <div>
                                <div className="btncenter"><Link to={`/member/profile`} className="btndefault">前往验证</Link></div>
                            </div>
                        </div>
                        <div className="wallet_attest_1">
                            <div><i className="fas fa-mobile-alt fa-1x"></i>
                                <h5>您尚未验证手机号码</h5></div>
                            <div>
                                <div className="btncenter"><Link to={`/member/profile`} className="btndefault">前往验证</Link></div>
                            </div>
                        </div>
                        <div className="wallet_attest_1">
                            <div><i className="far fa-envelope fa-1x"></i>
                                <h5>您尚未验证邮箱</h5></div>
                            <div>
                                <div className="btncenter"><Link to={`/member/profile`} className="btndefault">前往验证</Link></div>
                            </div>
                        </div>
                        <div className="wallet_attest_2">
                            <div><i className="fas fa-address-book fa-1x"></i>
                                <h5>您还没有建立任何帐户</h5></div>
                            <div>
                                <div className="btncenter"><a href="" className="btndefault">新增账户</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
