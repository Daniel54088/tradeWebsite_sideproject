import React from 'react';
import Slider from '../welcome/components/Slider.jsx';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        this.totop = this.totop.bind(this);
    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    totop(){ //回到最上層
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
      return (

          <main className="guide_pages tutorial help">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
                  <div className="tutorial_head">
                    <img  src={require('../images/guide/help/help_title.png')}/>
                  </div>
                  <div className="tutorial_wrap">
                    <div className="tutorial_content help_content">
                      <img  src={require('../images/guide/help/top.jpg')}/>
                      <h1><img  src={require('../images/main/rocket_img.png')}/>成为会员</h1>
                      <div className="panel-group" id="be_member">
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#be_member"
                      				   href="#question1_1">
                      					1. 如何加入会员？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question1_1" className="panel-collapse collapse in">
                      			<div className="panel-body">
                              在右上角中，有橘红色正方形，并有<span className="text-danger">「登录/注册」</span>字样的地方，<br/>
                              点选后，跳出来的视窗正下方会有<span className="text-danger">「登录」</span>及<span className="text-danger">「注册」</span>两件按钮，请点选注册，就能开始注册成为会员。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#be_member"
                      				   href="#question1_2">
                      					2. 找不到注册验证信怎么办？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question1_2" className="panel-collapse collapse">
                      			<div className="panel-body">
                              如果迟迟未收到验证信，请至邮箱的垃圾邮件夹查看；若还是没收到信，可找在线客服做人工验证。<br/>
                              <b>如何找客服？</b>视窗右侧有<span className="text-danger">「客服在线」</span>之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#be_member"
                      				   href="#question1_3">
                      					3. 成为会员后，我的私人资料是否会被存档？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question1_3" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				注册时本站要求填写的个人资料为往后确认提款资讯使用，线上付款皆是透过第三方符合国际安全认证的线上金流系统进行交易，<br/>
                              本站不会留存您的银行卡资料，您可安心在本站进行消费。
                      			</div>
                      		</div>
                      	</div>
                      </div>
                      <div className="btn_group">
                        <a onClick={this.totop} className="to_top">
                          TOP
                          <img  src={require('../images/main/rocket_top.png')}/>
                        </a>
                        <div className="clearfix"></div>
                      </div>

                      <h1><img  src={require('../images/main/rocket_img.png')}/>竞猜相关</h1>
                      <div className="panel-group" id="batting_about">
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_1">
                      					1. 我是新手该怎么入门？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_1" className="panel-collapse collapse in">
                      			<div className="panel-body">
                              网页右上角中，有<span className="text-danger">「新手教学」</span>，点选后会有四大选项,提供相关教导给新注册之会员。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_2">
                      					2. 币别规则？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_2" className="panel-collapse collapse">
                      			<div className="panel-body">
                              <ul>
                                <li>
                                  <img  src={require('../images/main/sliver_img.png')}/><b>银币：</b>
                                  为虚拟游戏币，可在趣味竞猜中使用，不能提现。
                                  <ul>
                                    <li>1. 新会员注册送1000银币，可到常规任务区点选<b>「领取」</b>。</li>
                                    <li>2. 每日凌晨06：00系统将自动审核帐户内银币数，若银币数低于500者，则自动补足至500，高于500银币者，则保持原数值。</li>
                                    <li>3. 银币可投注趣味竞猜银币盘，参与投注即可自动排名于银币获利排行榜，并取得相对应奖励，详细规则与奖励 以相关排行榜公告为准。</li>
                                    <li>4. 每季银币数量将重置到1000银币，排行榜积分将重新累计。</li>
                                  </ul>
                                </li>
                                <li>
                                  <img  src={require('../images/main/gold_img.png')}/><b>金币：</b><br/>
                                  1金币 = 1人民币，藉由充值或是登上银币排行榜取得，可在赔率竞猜及趣味竞猜中使用，能提现。
                                </li>
                                <li>
                                  <img src={require('../images/main/rocket_img.png')}/><b>火箭币：</b><br/>
                                  藉由金币下注(每下注10金币获得1火箭币)、或完成常规任务、或是登上银币排行榜取得，可用在火竞猜商城中兑换奖品。
                                </li>
                              </ul>
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_3">
                      					3. 火竞猜有哪些下注方式？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_3" className="panel-collapse collapse">
                      			<div className="panel-body">
                              火竞猜独有双核心、双币别竞猜系统，提供赔率竞猜及趣味竞猜两种下注系统，及金币、银币两种下注币别。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_4">
                      					4. 赔率竞猜怎么玩？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_4" className="panel-collapse collapse">
                      			<div className="panel-body">
                              GGCarry独家取得各大比赛数据后，针对各游戏项目提供浮动赔率，并提供战队数据供玩家参考，让你可以更精准的判断，选择想要的下注项目，刺激地关注比赛吧！<br/>
                              <ul>
                                <h5 className="title">赔率下注方式：</h5>
                                <li>选择欲下注的比赛场次。 </li>
                                <li>点击立即竞猜进入赛局房间，选择要下注的选项，确认要下注的金额，即完成下注。</li>
                                <li>每个赛局房间选项可复选不同细项，若欲选择多重选项，须逐一下注。</li>
                                <li>若下注成功，您能看见下注成功提示，也能在会员帐户<b>「竞猜中」</b>看见竞猜内容。</li>
                                <li>比赛结束后系统将进行派彩，您将在竞猜历史中看见派彩结果。</li>
                                <li><b>什么是滚球?</b> 两队还在比赛的期间进行下注的方式。<br/>
                                  <p className="text-danger">最低下注额：5金币（银币无法下注）</p>
                                </li>
                              </ul>
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_5">
                      					5. 过关竞猜怎么玩？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_5" className="panel-collapse collapse">
                      			<div className="panel-body">
                              <ul>
                                <h5 className="title">过关竞猜下注方式：</h5>
                                <li>选择欲下注的比赛选项，在每一个选项的右上角都有一个＋号可以添加投注到过关竞猜。</li>
                                <li>要投注过关竞猜的基本必须最少要选择三个不同的盘口，这三个不同盘口的组合可以是不同比赛的胜负盘、让分盘、比赛盘口或者特别盘口。如果是投注在同一个比赛，则只能选择一个胜负盘或者是一个让分盘再加上两 个不同局的特别盘口。</li>
                                <li>选择结束后，可以点击过关清单之后会出现以下页面，确认要投注的选项以及输入投注金额之后，点击确认下注即可完成过关竞猜。<br/>
                                    <p className="text-danger"><b>下注胜利的判定：</b>玩家在过关竞猜选择的所有盘口都需要猜对才能够获胜！</p>
                                </li>
                              </ul>
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_6">
                      					6. 趣味竞猜怎么玩？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_6" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				趣味竞猜会提供不同的下注选项，更加的贴近游戏内容与竞赛选手之间的互动，竞猜时可以复选下注选项，但最终只 会开出一个中奖选项。<br/>
                              进入趣味竞猜后，上方会有各项游戏分类及各项赛事名称选项，可供查询。<br/>
                              页面中，每个趣味竞猜房间右侧会有<b>「快速下注游戏区」</b>可提供会员直接下注<br/>
                              点选详细资料，则会看到此比赛的详细资料供会员选择下注。
                              <ul>
                                <h5 className="title">趣味竞猜下注方式：</h5>
                                <li>选择欲下注的比赛场次。</li>
                                <li>点击立即竞猜进入赛局房间，选择要下注的选项，确认要使用的币别，点击要下注的金额，即完成下注。</li>
                                <li>每个赛局房间选项可复选不同细项，若欲选择多重选项，须逐一下注。<br/>
                                    <p className="text-danger">最低下注额：10金币或10银币</p>
                                </li>
                              </ul>
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_7">
                      					7. 比赛结束后，开奖派彩时间？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_7" className="panel-collapse collapse">
                      			<div className="panel-body">
                              游戏结束后两小时内会进行派彩。 <br/>
                              以上若有任何问题，视窗右侧有<span className="text-danger">「客服在线」</span>之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_8">
                      					8. 下注中出现问题怎么解决？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_8" className="panel-collapse collapse">
                      			<div className="panel-body">
                              视窗右侧有<span className="text-danger">「客服在线」</span>之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#batting_about"
                      				   href="#question2_9">
                      					9. 下注竞猜后可否取消？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question2_9" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				当你已经完成确认竞猜，扣除金额后，即不能取消下注。
                      			</div>
                      		</div>
                      	</div>
                      </div>
                      <div className="btn_group">
                        <a onClick={this.totop} className="to_top">
                          TOP
                          <img src={require('../images/main/rocket_top.png')}/>
                        </a>
                        <div className="clearfix"></div>
                      </div>

                      <h1><img src={require('../images/main/rocket_img.png')}/>充值、提款</h1>
                      <div className="panel-group" id="charge_about">
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#charge_about"
                      				   href="#question3_1">
                      					1. 目前火竞猜提供哪些存款方式？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question3_1" className="panel-collapse collapse in">
                      			<div className="panel-body">
                              目前火竞猜能使用本地银行支付、在线存款支付、QQ支付、火卡充值。最低充值金额为<b>10元</b>，最高充值金额为<b>10000元。</b>
                              <ul>
                                <li><b>在线支付：</b><br/>
                                  配合银行为
                                  <ul className="text-danger">
                                    <li>中国工商银行</li>
                                    <li>中国建设银行</li>
                                    <li>中国民生银行</li>
                                    <li>平安银行</li>
                                    <li>招商银行</li>
                                    <li>交通银行</li>
                                    <li>中国光大银行</li>
                                    <li>中信银行</li>
                                    <li>中国农业银行</li>
                                    <li>兴业银行</li>
                                    <li>中国邮政储蓄银行</li>
                                    <li>华夏银行</li>
                                    <li>中国银行</li>
                                    <li>广东发展银行</li>
                                    <li>浦发银行</li>
                                    <li>北京银行</li>
                                  </ul>
                                </li>
                                <li>
                                  <b>QQ支付：</b><br/>
                                  择<b>「QQ支付」</b>，填写您欲存款金额并点选提交后，页面即会跳转出支付二维码，您可以透过您的手机QQ扫码进行支付动作。存款完毕后您可以在<b>「充值/提款」</b>处看到您的存款历史与火竞猜账户现有金银币总额。
                                </li>
                                <li>
                                  <b>本地银行/支付宝支付：</b><br/>
                                  火竞猜提供的转账账户为招商银行，您可选用同行转帐、跨行转账、自动柜员机转账、无卡转帐、柜台转账、手机转账、支付宝转账。
                                </li>
                                <li>
                                  <b>火卡充值：</b><br/>
                                  通过第三方供应商方便地购买现金卡，匿名存款，不泄露您的银行详细信息。
                                </li>
                              </ul>
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#charge_about"
                      				   href="#question3_2">
                      					2. 初次提款需要注意什么？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question3_2" className="panel-collapse collapse">
                      			<div className="panel-body">
                              登入后，右上角会有会员专属的个人中心，请点选「帐户选取」新增相关资料，设定好银行帐户后：<br/>
                              <ul>
                                <li>点击提款申请</li>
                                <li>填入提款金额</li>
                                <li>确认送出</li>
                              </ul>
                              款项经审核无误后将于<b>24小时</b>内打至您指定的帐户，最低提款金额<b>$20元。</b>初次提款需至您注册的信箱收取验证码，有时会掉到垃圾邮件中，若皆未收到邮件，可以找客服为您做人工验证。<br/>
                              <b>如何找客服？</b>视窗右侧有<span className="text-danger">「客服在线」</span>之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#charge_about"
                      				   href="#question3_3">
                      					3. 提款不成功？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question3_3" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				提款不成功有以下两种原因：<br/>
                              <ul>
                                <li>
                                  <b>下注额不足</b> <br/>
                                  在网站的存款额都必须绑定一倍下注额才能提款的，但是竞猜赢彩的金额是可以直接提款的呦！
                                </li>
                                <li>
                                  <b>真实名子与银行卡名子不同</b><br/>
                                  在注册时，请会员们一定要填写正确常用的银行卡用户名，以利人员审核，所有的审核程序都是为了保障您帐户的安全，再请客户体谅！
                                </li>
                              </ul>
                              以上若有任何问题视窗右侧有<span className="text-danger">「客服在线」</span>之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                      </div>
                      <div className="btn_group">
                        <a onClick={this.totop} className="to_top">
                          TOP
                          <img  src={require('../images/main/rocket_top.png')}/>
                        </a>
                        <div className="clearfix"></div>
                      </div>

                      <h1><img src={require('../images/main/rocket_img.png')}/>活动与优惠说明</h1>
                      <div className="panel-group" id="event_about">
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_1">
                      					1. 新会员有哪些注册礼？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_1" className="panel-collapse collapse in">
                      			<div className="panel-body">
                              现在新注册会员可立即领取<b> 1000银币 </b>。进入「会员」，于右侧「常规任务」即可领取。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_2">
                      					2. 首存会员会有哪些优惠？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_2" className="panel-collapse collapse">
                      			<div className="panel-body">
                              前往存款页面页面中，有栏位可选择优惠方案，分为<span className="text-danger">A方案</span>及<span className="text-danger">B方案</span>，<br/>
                              选定后，進行存款，此优惠就会一定进入到您的个人中心。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_3">
                      					3. 排行榜可以做什么？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_3" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				排行榜共有六种排行榜，您下注过的金额及获得的彩金奖励将自动计算进排行榜中，登榜即能得到相对应奖励，让您下注还能享有现金回馈！<br/>
                              相关奖励说明请参照排行榜奖励说明！ <br/>
                              在页面上方点选「排行榜」进入后，就可查询您的排行，分为：
                              <ul>
                                <li><b>火竞猜总排行榜</b></li>
                                <li><b>趣味竞猜-金币排行榜</b></li>
                                <li><b>趣味竞猜-银币排行榜</b></li>
                              </ul>
                              点选即可观看到此分类的排行榜详细资讯。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_4">
                      					4. 排行榜的结算与派奖时间？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_4" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				周排行：每周日23:59结算，24H内发送奖励。<br/>
                              月排行：每月底23:59结算，24H内发送奖励。<br/>
                              <p className="text-danger">温馨提醒：每季结束后，排行榜会归零重新计算。</p>
                              以上若有任何问题，视窗右侧有<span className="text-danger"></span>「客服在线」之图示点选后即可联络客服，或至视窗上方一列图示中，有<span className="text-danger">「联系我们」</span>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_5">
                      					5. 我可以从哪里知道我的排行榜排名？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_5" className="panel-collapse collapse">
                      			<div className="panel-body">
                              只要您登入会员后，点选页面最上栏<span className="text-danger">「排行榜」</span>，即可看到您每周、每月的排名，以及结算截止时间。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#event_about"
                      				   href="#question4_6">
                      					6. 我能从哪里知道火竞猜最近的优惠？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question4_6" className="panel-collapse collapse">
                      			<div className="panel-body">
                        			点击页面最上栏的「优惠」，选择<span className="text-danger">「优惠公告」</span>，里面有最近推出的竞猜优惠活动。
                      			</div>
                      		</div>
                      	</div>
                      </div>
                      <div className="btn_group">
                        <a onClick={this.totop} className="to_top">
                          TOP
                          <img  src={require('../images/main/rocket_top.png')}/>
                        </a>
                        <div className="clearfix"></div>
                      </div>

                      <h1><img  src={require('../images/main/rocket_img.png')}/>火币商城</h1>
                      <div className="panel-group" id="firecoin_about">
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#firecoin_about"
                      				   href="#question5_1">
                      					1. 商城是现金消费吗？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question5_1" className="panel-collapse collapse in">
                      			<div className="panel-body">
                              商城为火竞猜回馈会员消费的礼品兑换处，只要您藉由金币下注<b> (每下注10金币获得1火箭币) </b>、或完成常规任务、或是登上银币排行榜，就能领取火箭币来兑换礼品。
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#firecoin_about"
                      				   href="#question5_2">
                      					2. 我要如何在商城中兑换奖品？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question5_2" className="panel-collapse collapse">
                      			<div className="panel-body">
                              取得足够的火箭币后，选择您喜爱的商品与数量，点击立即购买，填妥您的送件资料即可。兑换完成可在「订单历史」中看见您的订单处理进度。
                              <p className="text-danger">温馨提醒：商城商品仅限大中国地区会员兑换。</p>
                      			</div>
                      		</div>
                      	</div>
                      	<div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#firecoin_about"
                      				   href="#question5_3">
                      					3. 商城中使用的火箭币如何取得？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question5_3" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				您可藉由金币下注<b> (每下注10金币获得1火箭币) </b>、或完成常规任务、或是登上银币排行榜取得。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#firecoin_about"
                      				   href="#question5_4">
                      					4. 我要如何知道订单资料？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question5_4" className="panel-collapse collapse">
                      			<div className="panel-body">
                      				兑换完成可在<b>「订单历史」</b>中看见您的订单处理进度。
                      			</div>
                      		</div>
                      	</div>
                        <div className="panel panel-default">
                      		<div className="panel-heading">
                      			<h4 className="panel-title">
                      				<a data-toggle="collapse" data-parent="#firecoin_about"
                      				   href="#question5_5">
                      					5. 兑换商品多久会送达？
                                <i className="fas fa-caret-down"></i>
                                <div className="clearfix"></div>
                      				</a>
                      			</h4>
                      		</div>
                      		<div id="question5_5" className="panel-collapse collapse">
                      			<div className="panel-body">
                              需视兑换的商品而定，一般流程在会员完成兑换程序时，<span className="text-danger">约7〜14天工作天</span>就会收到，但若遇上缺货状况，邮包寄丢...等情形，则需较长的工作天数，<br/>
                              视窗右侧有<b>「客服在线」</b>之图示点选后即可联络客服，或至视窗上方一列图示中，有<b>「联系我们」</b>，点选后，即可联系客服。
                      			</div>
                      		</div>
                      	</div>
                      </div>
                      <div className="btn_group">
                        <a onClick={this.totop} className="to_top">
                          TOP
                          <img src={require('../images/main/rocket_top.png')}/>
                        </a>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )
    }
}
