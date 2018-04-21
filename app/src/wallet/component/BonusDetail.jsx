import React from 'react';

export default class BonusDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

      return (
        <div className="modal fade" id="BonusModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="wallet_bg wallet_detailpop">
                      <h1>详细说明</h1>
                      <h5>火竞猜首存红利</h5>
                      <div>
                          <div className="wallet_ggaccount">
                              <div className="wallet_ggaccount2">
                                  <ul>
                                      <li className="wallet_list_right">
                                          <p >账名：</p>
                                      </li>
                                      <li>赠送比例</li>
                                      <li>红利上限</li>
                                      <li>转出彩金所需投注倍数</li>
                                  </ul>
                                  <ul>
                                      <li className="wallet_list_right">优惠A</li>
                                      <li>10%</li>
                                      <li>¥ 688</li>
                                      <li>10 倍</li>
                                  </ul>
                                  <ul>
                                      <li className="wallet_list_right">优惠B</li>
                                      <li>30%</li>
                                      <li>¥ 1388</li>
                                      <li>30 倍</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="payment_note clearfix">
                          <h5>申请方法</h5>
                          <ol>
                              <li>首次充值20元或以上，即可申请优惠红利。</li>
                              <li>充值时，在充值页面勾选赠送比例。</li>
                              <li>提交申请后并审核通过后，红利自动发放到会员账号中。</li>
                          </ol>
                          <hr/>
                          <h5>活动细则</h5>
                          <ol>
                              <li>首存红利必须在首次充值同时进行申请，否则将被视为自动放首存红利。</li>
                              <li>完成流水（投注额）要求即可提款。</li>
                              <li>若会员不申请首存红利，充值金额只需要一倍流水即可提现。</li>
                              <li>本优惠适用火竞猜优惠通用条款。</li>
                          </ol>
                      </div>
                      <div>
                          <div className="wallet_ggaccount">
                              <div className="wallet_ggaccount2 wallet_list270">
                                  <ul>
                                      <li>案例 1</li>
                                      <li>案例 2</li>
                                  </ul>
                                  <ul>
                                      <li className="wallet_list_left">
                                          &nbsp;会员 Tim 首次充值 500 元
                                          <br/>&nbsp;同时申请了方案一 10% 的红利
                                          <br/>&nbsp;Tim 可立即獲得彩金 500 x 10% = 50 元
                                          <br/>&nbsp;投注额达到（500 + 50）x 10 = 5,500 元
                                          <br/>&nbsp;即可領出彩金 </li>
                                      <li className="wallet_list_left">
                                          &nbsp;会员 Gary 首次充值 800 元
                                          <br/>&nbsp;同时申请了方案一 30% 的红利
                                          <br/>&nbsp;Gary 可立即獲得彩金 500 x 30% = 240 元
                                          <br/>&nbsp;投注额达到（800 + 240）x 30 = 31,200 元
                                          <br/>&nbsp;即可領出彩金</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="btncenter"><a href="" className="btndefault">我知道了</a></div>
                      </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
        )
    }
}
