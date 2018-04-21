import React from 'react';
import {Link } from 'react-router';
import { Tabs, Pagination} from 'antd';
import RankingItem from './rankingItem';
const TabPane = Tabs.TabPane;


export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          week_ranking_array:[],
          week_start_date:'',
          week_end_date:'',
          month_ranking_array:[],
          month_start_date:'',
          month_end_date:'',
        }
        this.getWeekData = this.getWeekData.bind(this);
    }

    componentDidMount(){
        this.getWeekData();
    }

    getWeekData(){
      $.ajax({
        method: "GET",
        url: '/src/ranking/ranking.json',
        dataType:'json',
        success: function(data){
        this.setState({week_ranking_array:data.data.rank_data,week_start_date:data.data.date.start_date,week_end_date:data.data.date.end_date});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){

        },
      });
    }


    render() {

      let game_name;
      let game_pic;
      let keep_betting;
      switch(this.props.params.type) { //根據進來的domain網址來判斷預設的圖片
        case 'inplay':
          game_name = '火竞猜';
          game_pic =  require('../images/main/gold_img.png');
          keep_betting = <Link to={`/inplay`} className="btnsys">去冲榜</Link>;
        break;
        case 'fpkgold':
          game_name = '趣味竞猜金币';
          game_pic =  require('../images/main/gold_img.png');
          keep_betting = <Link to={`/fpk`} className="btnsys">去冲榜</Link>;
        break;
        case 'fpksilver':
          game_name = '趣味竞猜银币';
          game_pic =  require('../images/main/sliver_img.png');
          keep_betting = <Link to={`/fpk`} className="btnsys">去冲榜</Link>;
        break;
        default:
          game_name = '趣味竞猜银币';
          game_pic =  require('../images/main/sliver_img.png');
          keep_betting = <Link to={`/inplay`} className="btnsys">去冲榜</Link>;
      }


      return (
        <main>
          <section className="ranking">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-md-10 col-sm-12 col-lg-offset-2 col-md-offset-1">
                  <div className="ranking_wrap">
                    <div className="board content">
                      <div className="title_bar">
                        <img src={game_pic}/ >{game_name}排行榜
                        <Link to={`/rankingreward`} target="_blank" className="btndefault">排行榜奖励规则</Link>
                        <div className="clearfix"></div>
                      </div>

                      <Tabs>
                      <TabPane tab="周排行" key="1">
                      <div className="table_head">
                        <div className="title">
                          {game_name}积分周排行榜
                        </div>
                        <div className="date_time">
                          <div className="time">
                            <span className="date">3</span>天
                            <span className="hour">10</span>時
                            <span className="min">15</span>分
                            <span className="sec">20</span>秒
                          </div>
                          <div className="date_range">
                            排行榜日期区间：{this.state.week_start_date} 至 {this.state.week_end_date}
                          </div>
                        </div>
                        <div className="table_label">
                          <div className="rank">排名</div>
                          <div className="player">玩家</div>
                          <div className="score"><i className="fa fa-star"></i>积分</div>
                          <div className="bonus">奖励</div>
                        </div>
                      </div>
                      <div className="table_body">
                        <div className="ranking_list">
                          {this.state.week_ranking_array.map(function(item,index){
                            return(
                              <RankingItem
                                key={index}
                                name={game_name}
                                pic={game_pic}
                                rank={item.rank}
                                account={item.account}
                                amount_format={item.amount_format}
                              />
                            );
                          }.bind(this))}
                        </div>
                        <div className="my_ranking">
                          <div className="ranking_item">
                            <div className="rank"><span>No. 452</span></div>
                            <div className="player">

                              <div className="name">skyly****</div>
                            </div>
                            <div className="score">

                              <img src={game_pic}/>
                              <span>120</span>
                            </div>
                            <div className="bonus">
                                <img src={game_pic}/>
                              <span>再接再厉</span>
                              {keep_betting}
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>


                    </div>
              </TabPane>
              <TabPane tab="月排行" key="2">
              <div className="table_head">
                <div className="title">
                  {game_name}积分月排行榜
                </div>
                <div className="date_time">
                  <div className="time">
                    <span className="date">3</span>天
                    <span className="hour">10</span>時
                    <span className="min">15</span>分
                    <span className="sec">20</span>秒
                  </div>
                  <div className="date_range">
                    排行榜日期区间：2017年12月01日 - 12月31日止
                  </div>
                </div>
                <div className="table_label">
                  <div className="rank">排名</div>
                  <div className="player">玩家</div>
                  <div className="score"><i className="fa fa-star"></i>积分</div>
                  <div className="bonus">奖励</div>
                </div>
              </div>
              <div className="table_body">
                <div className="ranking_list">
                    <RankingItem name={game_name} pic={game_pic} rank={"1"}/>
                    <RankingItem name={game_name} pic={game_pic} rank={"2"}/>
                  </div>
                <div className="my_ranking">
                  <div className="ranking_item">
                    <div className="rank"><span>No. 343</span></div>
                    <div className="player">

                      <div className="name">skyly****</div>
                    </div>
                    <div className="score">

                      <img src={game_pic}/>
                      <span>120</span>
                    </div>
                    <div className="bonus">
                        <img src={game_pic}/>
                      <span>再接再厉</span>
                      {keep_betting}
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>


            </div>
          </TabPane>
            </Tabs>
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
