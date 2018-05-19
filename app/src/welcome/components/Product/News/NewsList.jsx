import React from 'react';
import ReactDOM from 'react-dom';
import {Spin,Pagination} from 'antd'; //等待選轉組件
import NewsItem from './NewsItem.jsx';


let  NewsArray= [];
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          NewsArray:  [[],[]],
          CurrentPage:1,
          nowPageTotal:0,
        }

        this.getNews = this.getNews.bind(this);

        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
        this.getNews();
        var ws = new WebSocket('wss://stream.binance.com:9443/ws/ethbtc@ticker');

        ws.onmessage = function(event) {
          var data = event.data;
          console.log(data);
        }
    }

    getNews(){
       NewsArray = [{ //之後根據清單修改array內容
          title: 'Can XRP recover from this?', image:require('../../../../images/1218323476908.jpg')
        }, {
          title: 'XXXX Adds Top 10 Cryptocurrencies to its Platform',
        }, {
          title: 'Markets Market Crash Continues',
        }, {
          title: 'Investors are going to buy bitcoin whether advisors like it or not',
        }, {
        title: 'Bitcoin Price Rises Slowly as $8,500 Becomes the new Target',
        }, {
        title: 'Blockchain and Master Data Management',
      }, {
      title: 'Blockchain Offers Diverse Possibilities for Expanding ',
    }, {
    title: 'Is this the future for XMR?',
    }, {
      title: 'JPMorgan Co-President Jerry Pinto: Cryptocurrency “Will Play a Role” in Future',
    }, {
      title: 'Why ETH is going down?',
    }, {
      title: 'ETH Price Rises Slowly as $700 Becomes the new Targe',
    }];
      NewsArray =  this.setPages(NewsArray);
      this.setState({NewsArray:NewsArray,nowPageTotal: NewsArray.length});
    }





    setPages(orderArray){ //傳入array做 頁數處理 出來會變成巢狀迴圈

      let result = [];//最後結果
      let tenArray = []; //5個一組的array
      let pages = Math.ceil(orderArray.length/5);

      for(let i=0; i < pages; i++){
         tenArray=[];//每組一次頁 都要先清空 不然會疊加
         for(let y= (i*5);y <= (i*5+4);y++){
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
      let  NewsIsNotNull = this.state.NewsArray[this.state.CurrentPage - 1];   //現在頁數的News內容
      if(!NewsIsNotNull ){NewsIsNotNull  = [];}//如果沒有資料必須塞空陣列，不然會有error

      return (
        <div className="col-md-8">
                <h2 className="news_title">News</h2>
            <div className="tab_position">
                  {NewsIsNotNull.map(function(item,index){ //房間的array做map渲染
                     return(
                      <NewsItem key={index} title={item.title} price={item.price}/>
                     );
                  })}

            </div>
            <Pagination defaultCurrent={1} total={this.state.nowPageTotal *10} onChange={this.changePage} current={this.state.CurrentPage}  />
        </div>

        )
    }
}
