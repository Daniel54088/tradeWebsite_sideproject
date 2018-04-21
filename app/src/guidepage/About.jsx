import React from 'react';
import './guidepage.css';

export default class Login extends React.Component {
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
        <main className="guide_pages tutorial about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">

                <div className="tutorial_head">
                  <img  src={require('../images/guide/about/about_title.png')}/>
                </div>
                <div className="tutorial_wrap">
                  <div className="tutorial_content help_content">
                    <img  src={require('../images/guide/about/top.jpg')}/>
                    <p>
                      火竞猜成立于2017，是以电子竞技赛事为独立主题的竞猜网站。<br/>
                    火竞猜致力于电子竞技产业与赛事的推广，以电竞玩家的锐利角度打造专营式电竞竞猜平台，希望为电竞玩家们带来种类多样、趣味性十足且贴近赛事内容的竞猜体验。<br/>
                      <br/>
                      为了实现这样的想法，我们起用大量资深电竞玩家设计双核心竞猜系统、并从竞猜主题、平台机制，到相关网站活动等，都从游戏玩家的角度来设计规划。<br/>
                      在即将到来的电子竞技大时代，我们将秉持专营化电竞竞猜网站的立场，深入了解玩家需求并提升社会大众对于电竞赛事的关注与热忱。
                    </p>
                    <hr/>
                    <h3>专业背景</h3>
                    <div className="col-sm-4">
                      <div className="item">
                        <div className="pic">
                          <div className="pic_bg"></div>
                        </div>
                        <h4>10年营运团队</h4>
                        <div className="text">
                          <p>母集团事业版图跨足亚洲、欧洲地区，累积10年线上博弈营运背景，雄厚资金实力、技术设备完善，让您博大精深。</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item">
                        <div className="pic">
                          <div className="pic_bg"></div>
                        </div>
                        <h4>合法博彩执照</h4>
                        <div className="text">
                          <p>我们是拥有IOM在线博彩证书、澳洲博彩协会博彩证书，且由第一卡格场 (First cagayan) 所监管的网路博彩公司，公平公正的网路博彩环境，让您玩得安心。</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item">
                        <div className="pic">
                          <div className="pic_bg"></div>
                        </div>
                        <h4>24小时在线专业客服</h4>
                        <div className="text">
                          <p>24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉！</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <hr/>
                    <h3>专业电竞高手</h3>
                    <img  src={require('../images/guide/about/about_4.jpg')}/>
                    <p>獨立支持電競遊戲競猜，並廣納各路電競遊戲的高手進行賽前分析，讓您下注更有把握。</p>
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
