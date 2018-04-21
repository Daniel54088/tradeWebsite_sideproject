import React from 'react';
import Slider from '../welcome/components/Slider.jsx';

export default class Term extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    render() {
      return (

            <main className="guide_pages tutorial term">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
                    <div className="tutorial_wrap">
                      <div className="tutorial_content">
                        <img src={require('../images/guide/term/term_banner.png')}/>
                        <h1><img  src={require('../images/main/rocket_img.png')}/>火竞猜规则条款</h1>
                        <hr/>
                        <ul>
                          <h5 className="title">无存款彩金条款</h5>
                          <li>由无存款免费活动所产生的彩金（例如注册或推广活动赠送的免费彩金）的最高赔付金额是500RMB,。超过500以上的金额都将被作废。</li>
                          <li>免费彩金的投注额累计要求是奖励给您的彩金金额15倍, 除非有其他活动规则说明。</li>
                          <li>使用随意邮箱地址或电话号码注册的玩家不具备申领无存款彩金的资格。 如果玩家忽略该条款, 即便获得了免费彩金, 所有盈利也会被取消。</li>
                          <li>GGCarry火竞猜保留在任何时候取消或修改条款的权利, 无须另行通知。</li>
                        </ul>
                        <ul>
                          <h5 className="title">常规性奖金条款</h5>
                          <li>所有优惠只限于同一账号/人, 所有为获取任何奖金而申请开设多个账户的行为会被视为滥用奖金, 同时会导致账号冻结与资金没收。</li>
                          <li>为保证排行榜公平性，我们绝不容许任何诈欺行为,若发现有违背或利用规则与条款进行不当获利的会员, 将保留终止会员使用本网站以及没收奖金及盈利的绝对权力。</li>
                          <li>GGCarry火竞猜有权单方面决定会员是否利用优惠活动进行异常或无风险投注。对会员行为做出严格监视, 发现有任何违背、欺骗、或利用规则与条款进行非法获利的会员, 有权终止会员的登陆、暂停会员使用网站和没收奖金及赢利的权力, 无须特别通知。</li>
                          <li>GGCarry火竞猜管理层将作出奖金是否没收的最终决定权。</li>
                          <li>我们保留不支付使用随意虚假电子邮件地址和联系电话会员的权利。</li>
                          <li>网站各项红利优惠需绑定投注额限制，达成投注额限制即可提款，各项红利投注额限制请参照活动公告。</li>
                          <li>所有提款在操作前都将接受内部审核。对于未能通过审核的提款申请, GGCarry火竞猜保留取消任何奖金以及奖金产生的彩金的权利。玩家已经接受该条款。</li>
                          <li>如果, 已经通过审核, 却发现玩家（们）通过小伎俩, 利用任何软件或是系统漏洞, 错误, 进行盈利行为。GGCarry火竞猜将保留取消该玩家奖金获利的金额（以及/或暂时延迟此类玩家的提款申请）。只有完全结算的投注（例如, 投注结果为赢或输）会被计算为投注累计。</li>
                          <li>如果您在游戏期间获利金额达到GGCarry火竞猜认为的可以发布的金额标准时, 您被视为已同意GGCarry火竞猜将这些信息公布并使用到任何活动中。GGCarry火竞猜尊重并包含那些相信我们的玩家的个人信息, 但是同样保留将在网站或是游戏大厅中公布优惠活动中获利的玩家的姓名或是姓氏缩写的权利。</li>
                          <li>在有任何争议的情况下, GGCarry火竞猜保有最终决定权和解释权。</li>
                        </ul>
                        <div className="signature">
                          <p>更新日期：2017年6月1日</p>
                          <p>火竞猜 GGcarry 营运团队</p>
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
