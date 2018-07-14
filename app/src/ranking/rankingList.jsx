import React from 'react';
import {Link } from 'react-router';
import { Tabs, Pagination} from 'antd';
import RankingItem from './rankingItem';
const TabPane = Tabs.TabPane;
import ScrollReveal from 'scrollreveal'

var sr ;
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
        sr = ScrollReveal();
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

    componentDidUpdate(){
      let Container = document.getElementById("ranking_list");
      sr.reveal('.ranking_item', { container: Container, duration:2000 },50);

    }


    render() {
    

      let game_name;
      let game_pic;
      let keep_betting;
      switch(this.props.params.type) { //根據進來的domain網址來判斷預設的圖片
        case 'topvolume':
          game_name = 'Greatest Volume Rank List';
          //game_pic =  require('../images/main/gold_img.png');
          keep_betting = <Link to={`/inplay`} className="btnsys">去冲榜</Link>;
        break;
        case 'topgain':
          game_name = 'Greatest Gain Rank List';
          //game_pic =  require('../images/main/gold_img.png');
          keep_betting = <Link to={`/fpk`} className="btnsys">去冲榜</Link>;
        break;
        case 'toploss':
          game_name = 'Greatest Loss Rank List';
          //game_pic =  require('../images/main/sliver_img.png');
          keep_betting = <Link to={`/fpk`} className="btnsys">去冲榜</Link>;
        break;
        default:
          game_name = 'Greatest Volume Rank List';
          //game_pic =  require('../images/main/sliver_img.png');
          keep_betting = <Link to={`/inplay`} className="btnsys">去冲榜</Link>;
      }


      return (
        <main>
          <section className="ranking">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <div className="ranking_wrap">
                    <div className="board content">


                      <Tabs>
                      <TabPane tab="Week Rank" key="1">
                      <div className="table_head">
                        <div className="title">
                          {game_name}
                        </div>
                        <div className="date_time">
                          <div className="time">
                            <span className="date">3</span>Days
                            <span className="hour">10</span>:
                            <span className="min">15</span>:
                            <span className="sec">20</span>
                          </div>
                          <div className="date_range">
                            Rank From：{this.state.week_start_date} to {this.state.week_end_date}
                          </div>
                        </div>
                        <div className="table_label">
                          <div className="rank col-md-4 col-xs-4">Rank</div>
                          <div className="player col-md-4 col-xs-4">Coin</div>
                          <div className="score col-md-4 col-xs-4"><i className="fa fa-star"></i>Rate</div>

                        </div>
                      </div>
                      <div className="table_body">
                        <div className="ranking_list" id="ranking_list">
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
                    </div>
              </TabPane>

              <TabPane tab="Month Rank" key="2">
              <div className="table_head">
                <div className="title">
                  {game_name}
                </div>
                <div className="date_time">
                  <div className="time">
                    <span className="date">3</span>天
                    <span className="hour">10</span>時
                    <span className="min">15</span>分
                    <span className="sec">20</span>秒
                  </div>
                  <div className="date_range">
                    Rank From：2017年12月01日 to 12月31日止
                  </div>
                </div>
                <div className="table_label">
                  <div className="rank">Rank</div>
                  <div className="player">Coin</div>
                  <div className="score"><i className="fa fa-star"></i>Rate</div>
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
