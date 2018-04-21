import React from 'react';
import {Link } from 'react-router';
export default class RankingReward extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    totop(){ //回到最上層
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
      return (
        <main>
          <section className="ranking">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
                  <div className="ranking_wrap">
                    <div className="board reward">
                      <div className="col-md-10 col-md-offset-1">
                        <div className="title">
                          <h1>排行榜奖励 ★ 彩金奖池</h1>
                          <h3>银币换金币，金币再赢金</h3>
                          <ul>
                            <li><span>1</span> 在火竞猜内参与任何竞猜，系统会自动记录并加以排行。</li>
                            <li><span>2</span> 火竞猜一共设有九种排行榜竞赛活动，每週、每月、每季大奖拿不完。</li>
                          </ul>
                          <p>
                            你准备好跟众多的火粉们一起抢钱了吗? 金币可以玩、银币可以玩、天天都可以玩! <br/>
                            快冲刺排行榜来赢取更多的金币吧!!
                          </p>
                          <Link  to={`/register`} className="rewardbtn">火速注册</Link>
                          <p><i className="fa fa-star"></i>温馨提醒：排行榜赢得的金币奖励需绑八倍流水</p>
                        </div>
                        <div className="rank_table">
                          <h4>赔率竞猜</h4>
                          <span><img src={require('../images/main/gold_img.png')}/>金币排行榜奖励</span>
                          <Link  to={`/inplay`} className="btndefault">开始竞猜</Link>
                          <div className="clearfix"></div>
                          <hr/>
                          <table>
                            <tr>
                              <th>名次</th>
                              <th>週</th>
                              <th>月</th>
                              <th>季</th>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>3000</td>
                              <td>2000</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>2000</td>
                              <td>1000</td>
                              <td>800</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>1000</td>
                              <td>8000</td>
                              <td>500</td>
                            </tr>
                            <tr>
                              <td>4~10</td>
                              <td>800</td>
                              <td>500</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>11~20</td>
                              <td>500</td>
                              <td>300</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>21~30</td>
                              <td>200</td>
                              <td>100</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>31~50</td>
                              <td>200</td>
                              <td>100</td>
                              <td>80</td>
                            </tr>
                            <tr>
                              <td>51~100</td>
                              <td>100</td>
                              <td>80</td>
                              <td>50</td>
                            </tr>
                          </table>
                          <p>(奖励單位:金币)</p>
                        </div>
                        <div className="rank_table">
                          <h4>趣味竞猜</h4>
                          <span><img src={require('../images/main/gold_img.png')}/>金币排行榜奖励</span>
                          <Link  to={`/fpk`}className="btndefault">开始竞猜</Link>
                          <div className="clearfix"></div>
                          <hr/>
                          <table>
                            <tr>
                              <th>名次</th>
                              <th>週</th>
                              <th>月</th>
                              <th>季</th>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>3000</td>
                              <td>2000</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>2000</td>
                              <td>1000</td>
                              <td>800</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>1000</td>
                              <td>8000</td>
                              <td>500</td>
                            </tr>
                            <tr>
                              <td>4~10</td>
                              <td>800</td>
                              <td>500</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>11~20</td>
                              <td>500</td>
                              <td>300</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>21~30</td>
                              <td>300</td>
                              <td>200</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>31~50</td>
                              <td>200</td>
                              <td>100</td>
                              <td>80</td>
                            </tr>
                            <tr>
                              <td>51~100</td>
                              <td>100</td>
                              <td>80</td>
                              <td>50</td>
                            </tr>
                          </table>
                          <p>(奖励單位:金币)</p>
                        </div>
                        <div className="rank_table">
                          <h4>趣味竞猜</h4>
                          <span><img src={require('../images/main/sliver_img.png')}/>銀币排行榜奖励</span>
                          <Link  to={`/fpk`} className="btndefault">开始竞猜</Link>
                          <div className="clearfix"></div>
                          <hr/>
                          <table>
                            <tr>
                              <th>名次</th>
                              <th>週</th>
                              <th>月</th>
                              <th>季</th>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>1000</td>
                              <td>500</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>800</td>
                              <td>300</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>500</td>
                              <td>250</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>4~10</td>
                              <td>400</td>
                              <td>200</td>
                              <td>150</td>
                            </tr>
                            <tr>
                              <td>11~20</td>
                              <td>300</td>
                              <td>150</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>21~30</td>
                              <td>200</td>
                              <td>100</td>
                              <td>80</td>
                            </tr>
                            <tr>
                              <td>31~50</td>
                              <td>100</td>
                              <td>80</td>
                              <td>50</td>
                            </tr>
                          </table>
                          <p>(奖励單位:銀币)</p>
                        </div>
                        <p>火竞猜GGCarry营运团队</p>
                        <div className="btn_group">
                          <a onClick={this.totop} className="to_top">
                            TOP
                            <img src={require('../images/main/rocket_top.png')}/>
                          </a>
                          <div className="clearfix"></div>
                        </div>
                    </div>
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
