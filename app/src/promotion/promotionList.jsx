import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PromotionItem from './promotionItem.jsx';
import './promotion.css'
import {Link, browserHistory } from 'react-router';
import { Pagination } from 'antd';


window.addEventListener("popstate", function(e){ //監聽如果上下頁要重新ｒｅｌｏａｄ　for tab功能
    location.reload();

});

let whichTab ;
export default class PromotionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

          eventArray:[],
          CurrentPage:1,
          nowPageTotal:0,
        }
        this.callback = this.callback.bind(this);
        this.getEventList = this.getEventList.bind(this);
        this.changePage =   this.changePage.bind(this);
    }

    componentDidMount(){
      this.getEventList();
    }


    getEventList(){
      $.ajax({
        method: "GET",
        url: '/src/promotion/activity.json',
        dataType:'json',
        success: function(data){
          let newEventArray = data.data.activity;
              newEventArray =  this.setPages(newEventArray); //做成頁數
          this.setState({eventArray:newEventArray,nowPageTotal:newEventArray.length});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){

        },
      });

    }//end of  getEventList


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


    callback(key){
      //更換tab就重新reload該頁面
      if(key == 1){
        this.setState({nowPage:'1',nowPageTotal:this.state.activityArray.length});
        browserHistory.push('/promotion');
      }else{
        this.setState({nowPage:'2',nowPageTotal:this.state.eventArray.length});
        browserHistory.push('/event');
      }
      this.setState({CurrentPage:1});
    }

    render() {


      let  EventIsNotNull = this.state.eventArray[this.state.CurrentPage - 1];   //現在頁數的news內容
      if(!EventIsNotNull ){EventIsNotNull  = [];}//如果沒有資料必須塞空陣列，不然會有error

      return (
        <div>
        <Header callback={this.callback}/>
          <main className="promotion">
            <div className="content container">
                <div className="row">
                    <div className="col-sm-12 col-sm-offset-1">
                                  {EventIsNotNull.map(function(item,index){ //房間的array做map渲染
                                     return(
                                      <PromotionItem key={index} title={item.title} id={item.id}/>
                                     );
                                  })}

                             <Pagination defaultCurrent={1} total={this.state.nowPageTotal *10} onChange={this.changePage} current={this.state.CurrentPage}  />
                            </div>
                    </div>
            </div>
          </main>

          <Footer/>

        </div>
        )
    }
}
