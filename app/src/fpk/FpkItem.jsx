import React from 'react';



export default class FpkItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {

      return (
        <div className="fpk1_bg">
          <div className="fpk1_left">
            <div className="fpk1_left_1">
              <h3>奖金总彩池</h3>
              <hr/>
              <div className="fpk_silver_gold">
                <ul>
                  <li className="gold_left"><img src={require('../images/main/gold_img.png')}/></li>
                  <li className="money_right">
                    <h5>200,000</h5></li>
                  </ul>
                  <ul>
                    <li className="gold_left"><img  src={require('../images/main/sliver_img.png')}/></li>
                    <li className="money_right">
                      <h5>10,240,000</h5></li>
                    </ul>
                  </div>
                  <p><i className="far fa-clock fa-1x"></i>3 天 13 小时 後封盤</p>
                </div>
              </div>
              <div className="fpk1_center">
                <div className="radiooption">
                  <h4>{this.props.title}</h4>
                  <hr/>
                  <div className="radiooption_content">
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" className="option-input checkbox" onClick={console.log(123)} />
                          <p>YG拿下第一局胜利首杀小龙</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="option-input checkbox" onClick={console.log(123)} />
                          <p>首座防塔</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="option-input checkbox" onClick={console.log(123)} />
                          <p>YG拿下第一局胜+首座防塔</p>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="option-input checkbox" onClick={console.log(123)} />
                          <p>YG拿下第利首杀小龙+首座防塔</p>
                        </label>
                      </li>
                    </ul>
                    <label className="hero button betnow" htmlFor="lightbox-1">
                      <div className="btnsys" id="window-yo">
                        <a href="fpk_detail.html">
                          <p>详细资讯</p>
                        </a>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="fpk1_right">
                <h5>开局时间：2017-12-22 11:00</h5>
                <div className="fpk1_rightselect">
                  <a href=""><h3 className="fpk1_rightgold">金币投注</h3></a>
                  <a href=""><h3 className="fpk1_rightsilver">银币投注</h3></a>
                </div>
                <div className="form_group has_error">
                  <input type="text" className="input_mainpg" name="loginID" placeholder="请输入数字"/>
                  <a href="#" className="btndefault">立即投注</a></div>
                </div>
                <div className="fpk1_rightbtn">
                </div>
                <hr/>
              </div>
        )
    }
}
