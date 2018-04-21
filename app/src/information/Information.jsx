import React from 'react';
import './news.css';

export default class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type:location.pathname.slice(1,location.pathname.indexOf('/',1)), //擷取domain的字串,找到現在是哪一個類別

        }

    }



    render() {

      return (
        <main>
          <div className="container-fluid">
            <div className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
              <section className="news">
                <div className="newscontent">
                  <div className="newscon_title"><div className="titleimg"></div><a href="news.html"></a><span>新闻详情</span></div>
                  <h1>Kikis：“人们低估了老将在队伍里的作用，最好的阵容是两三个老将加新秀”</h1>
                  <span>时间：2017/7/20 10:00:00 +00:00</span>
                  <span className="watcher"><i className="fa fa-eye"></i>999,999</span>
                  <div className="clearfix"></div>

                  <div className="newscontent_txt">
                    <img  src={require('../images/news/activityimg/activityimg01.jpg')}/>
                    <p>
                    欧洲新军Mysterious Monkeys开始摆脱不胜的困境了，前FNC.A上野组合Kikis和Amazing的加入给队伍带来了新鲜的配合。在上周战胜ROCCAT后，MM的上单选手Kikis就老将在队中的作用等问题接受了外媒Slingshot的采访
                    </p>
                     <p>
                    Q：有传言称MM非常期待你和Amazing的加盟，因为你们二人可以给队伍带来领导力并帮助队伍塑造打法和风格。你认为在现实中的情况和传言有多少相符？你是如何理解你与Amazing的配合的？
                    </p>
                     <p>
                    A：我认为人们低估了老将在队伍里的作用，我和Amazing合作很久了，而且MM在这之前并没有一位真正有经验的、或者说能够起到带头作用的选手，而我认为自己和Amazing可以在赛场内外都能帮助这些选手。赛场外，我们指导这些新人如何调整自己的心态，让他们情绪稳定，并教会他们如何从单排路人成长为一名职业选手。
                    </p>
                    <p>
                    欧洲新军Mysterious Monkeys开始摆脱不胜的困境了，前FNC.A上野组合Kikis和Amazing的加入给队伍带来了新鲜的配合。在上周战胜ROCCAT后，MM的上单选手Kikis就老将在队中的作用等问题接受了外媒Slingshot的采访
                    </p>
                     <p>
                    Q：有传言称MM非常期待你和Amazing的加盟，因为你们二人可以给队伍带来领导力并帮助队伍塑造打法和风格。你认为在现实中的情况和传言有多少相符？你是如何理解你与Amazing的配合的？
                    </p>
                     <p>
                    A：我认为人们低估了老将在队伍里的作用，我和Amazing合作很久了，而且MM在这之前并没有一位真正有经验的、或者说能够起到带头作用的选手，而我认为自己和Amazing可以在赛场内外都能帮助这些选手。赛场外，我们指导这些新人如何调整自己的心态，让他们情绪稳定，并教会他们如何从单排路人成长为一名职业选手。
                    </p>
                     <p>
                    A：我认为人们低估了老将在队伍里的作用，我和Amazing合作很久了，而且MM在这之前并没有一位真正有经验的、或者说能够起到带头作用的选手，而我认为自己和Amazing可以在赛场内外都能帮助这些选手。赛场外，我们指导这些新人如何调整自己的心态，让他们情绪稳定，并教会他们如何从单排路人成长为一名职业选手。
                    </p>
                    <p>
                    欧洲新军Mysterious Monkeys开始摆脱不胜的困境了，前FNC.A上野组合Kikis和Amazing的加入给队伍带来了新鲜的配合。在上周战胜ROCCAT后，MM的上单选手Kikis就老将在队中的作用等问题接受了外媒Slingshot的采访
                    </p>
                     <p>
                    Q：有传言称MM非常期待你和Amazing的加盟，因为你们二人可以给队伍带来领导力并帮助队伍塑造打法和风格。你认为在现实中的情况和传言有多少相符？你是如何理解你与Amazing的配合的？
                    </p>
                     <p>
                    A：我认为人们低估了老将在队伍里的作用，我和Amazing合作很久了，而且MM在这之前并没有一位真正有经验的、或者说能够起到带头作用的选手，而我认为自己和Amazing可以在赛场内外都能帮助这些选手。赛场外，我们指导这些新人如何调整自己的心态，让他们情绪稳定，并教会他们如何从单排路人成长为一名职业选手。
                    </p>
                    <a href="index.html" className="btnsys">回到新闻首页</a>
                    <div className="clearfix"></div>
                  </div>
                  <div className="hot_news">
                    <h2><i className="fa fa-fire"></i>更多热门新闻</h2>
                    <a href="#">
                      <div className="news_block">
                        <div className="news_block_img">
                          <div className="news_bg_img" style={{background:"url('http://placehold.it/1000x1000')"}}></div>
                        </div>
                        <div className="news_title">
                          2017年电竞市场报告 DOTA2依旧坚挺绝地求生潜力巨大
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="news_block">
                        <div className="news_block_img">
                          <div className="news_bg_img" style={{background:"url('http://placehold.it/1000x1000')"}}></div>
                        </div>
                        <div className="news_title">
                          2017年电竞市场报告 DOTA2依旧坚挺绝地求生潜力巨大
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="news_block">
                        <div className="news_block_img">
                          <div className="news_bg_img" style={{background:"url('http://placehold.it/1000x1000')"}}></div>
                        </div>
                        <div className="news_title">
                          2017年电竞市场报告 DOTA2依旧坚挺绝地求生潜力巨大
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="news_block">
                        <div className="news_block_img">
                          <div className="news_bg_img"style={{background:"url('http://placehold.it/1000x1000')"}}></div>
                        </div>
                        <div className="news_title">
                          2017年电竞市场报告 DOTA2依旧坚挺绝地求生潜力巨大
                        </div>
                      </div>
                    </a>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </section>
            </div>
          </div>
        </main>

        )
    }
}
