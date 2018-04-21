import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import './s_tab.css';

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.totop = this.totop.bind(this);
    }

    totop(){ //回到最上層
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
      return (
        <main className="guide_pages tutorial">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-offset-2 col-sm-offset-1">
                <div className="tutorial_head">
                  <img  src={require('../images/guide/teach/tutorial_title.png')}/>
                </div>

          <Tabs>
              <TabPane tab="赔率竞猜" key="1">
                <div className="tutorial_wrap">
                  <div className="tutorial_content">
                    <img src={require('../images/guide/teach/index_banner.jpg')}/>
                    <h1><img src={require('../images/main/rocket_img.png')}/>赔率竞猜</h1>
                    <p>GGCarry独家取得各大比赛数据后，针对各游戏项目提供浮动赔率，并提供战队数据供玩家参考，让你可以更精准的判断，选择想要的下注项目，刺激地关注比赛吧！</p>
                    <hr/>
                    <h2>赔率下注方式</h2>
                    <img src={require('../images/guide/payment/GG_1.jpg')}/>
                    <p className="caption"><i className="far fa-lightbulb"></i>选择欲下注的比赛场次。</p>
                    <img  src={require('../images/guide/payment/GG_2.jpg')}/>
                    <p className="caption"><i className="far fa-lightbulb"></i>点击立即竞猜进入赛局房间，选择要下注的选项，确认要下注的金额，即完成下注。</p>
                    <p className="caption"><i className="far fa-lightbulb"></i>每个赛局房间选项可复选不同细项，若欲选择多重选项，须逐一下注。</p>
                    <div className="btn_group">
                      <a onClick={this.totop} className="to_top">
                        TOP
                        <img  src={require('../images/main/rocket_top.png')}/>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="过关竞猜" key="2">
                <div className="tutorial_wrap">
                  <div className="tutorial_content">
                    <img  src={require('../images/guide/teach/imgame_banner.jpg')}/>
                    <h1><img  src={require('../images/main/rocket_img.png')}/>赔率过关竞猜 IM</h1>
                    <hr/>
                    <h2>下注方式</h2>
                    <img src={require('../images/guide/payment/imgame_1.png')}/>
                    <p className="caption">
                      <i className="far fa-lightbulb"></i>选择欲下注的比赛选项，在每一个选项的右上角都有一个＋号可以添加投注到过关竞猜。 <br/>
                      <span>要投注过关竞猜的基本必须最少要选择三个不同的盘口，这三个不同盘口的组合可以是不同比赛的胜负盘、让分盘、比赛盘口或者特别盘口。如果是投注在同一个比赛，则只能选择一个胜负盘或者是一个让分盘再加上两个不同局的特别盘口。</span>
                    </p>
                    <img src={require('../images/guide/payment/imgame_2.png')}/>
                    <p className="caption"><i className="far fa-lightbulb"></i>选择结束后，可以点击过关清单之后会出现以下页面，确认要投注的选项以及输入投注金额之后，点击确认下注即可完成过关竞猜。</p>
                    <p className="caption">
                      <i className="far fa-lightbulb"></i>下注胜利的判定 <br/>
                      <span>玩家在过关竞猜选择的所有盘口都需要猜对才能够获胜！</span>
                    </p>
                    <img  src={require('../images/guide/payment/imgame_3.png')}/>
                    <div className="btn_group">
                      <a onClick={this.totop} className="to_top">
                        TOP
                        <img  src={require('../images/main/rocket_top.png')}/>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="趣味竞猜" key="3">
                <div className="tutorial_wrap">
                  <div className="tutorial_content">
                    <img  src={require('../images/guide/teach/fpk_banner.jpg')}/>
                    <h1><img  src={require('../images/main/rocket_img.png')}/>趣味竞猜</h1>
                    <p>趣味竞猜会提供不同的下注选项，更加的贴近游戏内容与竞赛选手之间的互动，竞猜时可以复选下注选项，但最终只会开出一个中奖选项。</p>
                    <ul className="rule_list">
                      <li>每场赛局火竞猜将收取总彩金的10％为手续费。</li>
                      <li>请注意竞猜房内的开奖说明，假设开奖顺序为A>B>C>D，比赛结果若有A與C同時成立，只会开出开奖顺序在前的A选项。</li>
                      <li className="danger">玩家的总下注额扣除手续费之后，将依照下注额比例分配总彩金。举例：选项A彩金有1,000、选项B彩金有2,000、选项C彩金有3,000总彩金=1,000+2,000+3,000=6,000 若最终开出选项为A，在总彩金扣除手续费之后由下注A选项的玩家们依照下注比例来获得彩金。</li>
                    </ul>
                    <hr/>
                    <h2>赔率下注方式</h2>
                    <p className="caption"><i className="far fa-lightbulb"></i>选择欲下注的比赛场次。</p>
                    <img src={require('../images/guide/payment/FPK_1.jpg')}/>
                    <p className="caption"><i className="far fa-lightbulb"></i>点击立即竞猜进入赛局房间，选择要下注的选项，确认要下注的金额，即完成下注。</p>
                    <img  src={require('../images/guide/payment/FPK_2.jpg')}/>
                    <p className="caption">
                      <i className="far fa-lightbulb"></i>每个赛局房间选项可复选不同细项，若欲选择多重选项，须逐一下注。 <br/>
                      <span>最低下注额：10金币或10银币</span>
                    </p>
                    <div className="btn_group">
                      <a onClick={this.totop} className="to_top">
                        TOP
                        <img src={require('../images/main/rocket_top.png')}/>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </TabPane>

              <TabPane tab="币别规则" key="4">
                <div className="tutorial_wrap">
                  <div className="tutorial_content">
                    <img  src={require('../images/guide/teach/coin_banner.jpg')}/>
                    <hr/>
                    <h2><img src={require('../images/main/sliver_img.png')}/>银币相关规则</h2>
                    <ul className="rule_list">
                      <li>新会员注册送1000银币，可到常规任务区点选「领取」。</li>
                      <li>每日凌晨06:00将自动审核帐户内银币数，若银币低于500者，则自动补足至500，高于500银币者，则保持原数值。</li>
                      <li>银币可投注趣味竞猜银币盘，参与投注则可自动排名于银币获利排行榜，并取得相对应奖励，详细规则与奖励已相关排行榜公告为准。</li>
                      <li>每季银币数量将重置到1000银币，排行榜积分将重新累积。</li>
                    </ul>
                    <h2><img src={require('../images/main/gold_img.png')}/>金币相关规则</h2>
                    <ul className="rule_list">
                      <li>会员充值后将1比1转成帐户中的金币。</li>
                      <li>金币能畅游站内所有竞猜盘，参与投注即可自动排名于金币获利排行榜，并取得相对应奖励，详细规则与奖励以相关排行榜公告为准。</li>
                    </ul>
                    <h2><img  src={require('../images/main/rocket_img.png')}/>火箭币相关规则</h2>
                    <ul className="rule_list">
                      <li>会员每下注10金币可得1火箭币，火箭币由系统自动派发。</li>
                      <li>火箭幣可使用於火競猜商城兌換禮品。</li>
                    </ul>
                    <div className="btn_group">
                      <a onClick={this.totop} className="to_top">
                        TOP
                        <img src={require('../images/main/rocket_top.png')}/>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </TabPane>
          </Tabs>


              </div>
            </div>
          </div>
        </main>

        )
    }
}
