import React from 'react';
import {Spin,Pagination} from 'antd'; //等待選轉組件
import NewsItem from './NewsItem.jsx';

import {cx} from '../../../../mutipleClass.js';

let  NewsArray= [];
let myVar ;
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          NewsArray:  [[],[]],
          CurrentPage:1,
          nowPageTotal:0,
          pagClass:'tab_position',
        }

        this.getNews = this.getNews.bind(this);

        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
        this.getNews();

    }

    componentWillUpdate(nextProps,nextState){
      let pagClass ;

      if(this.state.CurrentPage !== nextState.CurrentPage){ //如果有按下分頁效果 , 先消失
           pagClass = cx({'tab_position': true,'off': true });
           this.setState({pagClass:pagClass});

        myVar = setTimeout(function(){ //過幾秒出現
              pagClass = cx({'tab_position': true});
              this.setState({pagClass:pagClass})
            }.bind(this),800);

      }


    }

    componentWillUnmount(){
      clearTimeout(myVar);
    }



    getNews(){
       NewsArray = [{ //之後根據清單修改array內容
          title: 'Investors are going to buy bitcoin whether advisors like it or not', image:require('../../../../images/news/news1.jpg')
        }, {
          title: 'XXXX Adds Top 10 Cryptocurrencies to its Platform',image:require('../../../../images/news/news2.jpg')
        }, {
          title: 'Markets  Crash Continues', image:require('../../../../images/news/news3.jpg')
        }, {
          title: 'Can XRP recover from this?', image:require('../../../../images/news/news4.jpg')
        }, {
        title: 'Bitcoin Price Rises Slowly as $8,500 Becomes the new Target',image:require('../../../../images/news/news5.jpg')
        }, {
        title: 'Blockchain and Master Data Management', image:require('../../../../images/news/news6.jpg')
        }, {
        title: 'Blockchain Offers Diverse Possibilities for Expanding ', image:require('../../../../images/news/news7.jpg')
        }, {
        title: 'Is this the future for XMR?', image:require('../../../../images/news/news1.jpg')
        }, {
        title: 'JPMorgan Co-President Jerry Pinto: Cryptocurrency “Will Play a Role” in Future', image:require('../../../../images/news/news2.jpg')
        }, {
        title: 'Why ETH is going down?', image:require('../../../../images/news/news3.jpg')
        }, {
        title: 'ETH Price Rises Slowly as $700 Becomes the new Targe', image:require('../../../../images/news/news4.jpg')
        }];
      NewsArray =  this.setPages(NewsArray);
      this.setState({NewsArray:NewsArray,nowPageTotal: NewsArray.length});
    }





    setPages(orderArray){ //傳入array做 頁數處理 出來會變成巢狀迴圈

      let result = [];//最後結果
      let tenArray = []; //4個一組的array
      let pages = Math.ceil(orderArray.length/5);

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
      document.documentElement.scrollTop =500;

      this.setState({CurrentPage:page});
    }


    render() {

      let  NewsIsNotNull = this.state.NewsArray[this.state.CurrentPage - 1];   //現在頁數的News內容
      if(!NewsIsNotNull ){NewsIsNotNull  = [];}//如果沒有資料必須塞空陣列，不然會有error


      return (
        <div  id="mainNews">

            <div className={this.state.pagClass}>
                  {NewsIsNotNull.map(function(item,index){ //房間的array做map渲染
                     return(
                      <NewsItem key={index} title={item.title} image={item.image}/>
                     );
                  })}

            </div>
       
            <div className="PageChange">
              <Pagination defaultCurrent={1} total={this.state.nowPageTotal *10} onChange={this.changePage} current={this.state.CurrentPage}  />
            </div>
        </div>


        )
    }
}
