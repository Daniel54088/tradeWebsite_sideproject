import React from 'react';
import ReactDOM from 'react-dom';
import {Spin,Tabs,Pagination} from 'antd'; //等待選轉組件
import NewsItem from './NewsItem.jsx';
const TabPane = Tabs.TabPane;

let  NewsArray= [];
let RecommendArray= [];
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          NewsArray:  [[],[]],
          RecommendArray:  [[],[]],
          CurrentPage:1,
          nowPageTotal:0,
        }
        this.callback = this.callback.bind(this);
        this.getNews = this.getNews.bind(this);
        this.getRecommend = this.getRecommend.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
        this.getNews();
        this.getRecommend();
    }

    getNews(){
       NewsArray = [{ //之後根據清單修改array內容
          title: '(PUBG)2/14 牡羊宝宝第一局，游戏结束时间',
        }, {
          title: '(PUBG)2/14 第一局，牡羊宝宝拾获的第一把枪械种类',
        }, {
          title: '(PUBG)2/14 牡羊宝宝第二局，游戏结束时间',
        }, {
          title: '(PUBG)2/14 第二局，牡羊宝宝拾获的第一件防弹衣等级',
        }, {
        title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
        }, {
        title: '(Dota2布加勒斯特八强对阵出炉：小组赛复仇战就此展开',
      }, {
      title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
    }, {
    title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
    }, {
      title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
    }, {
      title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
    }, {
      title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
    }];
      NewsArray =  this.setPages(NewsArray);
      this.setState({NewsArray:NewsArray,nowPageTotal: NewsArray.length});
    }

    getRecommend(){
       RecommendArray = [{ //之後根據清單修改array內容
          title: 'TACO空降reddit：谈ID由来和离开SK原因',
        }, {
          title: '状态再战OMG AJ率BLG客战重庆',
        }, {
          title: '【DOTA2】iG.Vitality新赛季人员调整公告',
        }, {
          title: 'CG再次迎来阵容变动 东南亚小将Ahjit加入',
        }, {
        title: 'DAC主场明星礼品偷跑 来领取你的皮鞋吧',
        }, {
        title: '(PUBG)2/14 第二局，Nest冠军IG直接晋级德杯8强',
      }];
      RecommendArray = this.setPages(RecommendArray);
      this.setState({RecommendArray:RecommendArray});
    }

    callback(key){ //按下 新聞或賽事推薦tab後要更換的state

      if(key == '2'){
        this.setState({nowPageTotal:RecommendArray.length});
      }else{
        this.setState({nowPageTotal:NewsArray.length});
      }
      this.setState({CurrentPage:1});
    }


    setPages(orderArray){ //傳入array做 頁數處理 出來會變成巢狀迴圈

      let result = [];//最後結果
      let tenArray = []; //4個一組的array
      let pages = Math.ceil(orderArray.length/4);

      for(let i=0; i < pages; i++){
         tenArray=[];//每組一次頁 都要先清空 不然會疊加
         for(let y= (i*4);y <= (i*4+3);y++){
            if(!orderArray[y]){  //沒有資料就結束
              break;
            }
            tenArray.push(orderArray[y]);
        }
        result[i] = tenArray;
      }

      return result;
      /*
        結果會變成   reault[0] = [product1,product2,product3,product4,product5.......];
                    reault[1] = [product11,product12,product13,product14,product15.......];
                    .... 以此類推
      */
    }

    changePage(page){

      this.setState({CurrentPage:page});
    }


    render() {
      let  NewsIsNotNull = this.state.NewsArray[this.state.CurrentPage - 1];   //現在頁數的news內容
      if(!NewsIsNotNull ){NewsIsNotNull  = [];}//如果沒有資料必須塞空陣列，不然會有error
      let  RecommendIsNotNull = this.state.RecommendArray[this.state.CurrentPage - 1];
      if(!RecommendIsNotNull ){RecommendIsNotNull  = [];}
      return (
        <div className="col-md-8">
            <div className="tab_position">
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane className="tab_race" tab="电竞新闻" key="1">
                  {NewsIsNotNull.map(function(item,index){ //房間的array做map渲染
                     return(
                      <NewsItem key={index} title={item.title}/>
                     );
                  })}

                </TabPane>
                <TabPane className="tab_race" tab="赛事推荐" key="2">
                  {RecommendIsNotNull.map(function(item,index){ //房間的array做map渲染
                     return(
                      <NewsItem key={index} title={item.title}/>
                     );
                  })}
                </TabPane>
              </Tabs>
            </div>

            <Pagination defaultCurrent={1} total={this.state.nowPageTotal *10} onChange={this.changePage} current={this.state.CurrentPage}  />
        </div>

        )
    }
}
