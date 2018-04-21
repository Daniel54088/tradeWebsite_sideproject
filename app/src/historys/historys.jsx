import React from 'react';
import ReactDOM from 'react-dom';
import './historys.css';
import { notification, Pagination } from 'antd';
import HistorysItem from './historysItem.jsx';
import HistorysInput from './historysInput.jsx';


let orderArray =[];
let pagedArray =[];

export default class Historys extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          items: [[],[]],
          page:1,
          CurrentPage:1,
        }
          this.getOrder = this.getOrder.bind(this);
          this.searchItem = this.searchItem.bind(this);
          this.sortDate =   this.sortDate.bind(this);
          this.changePage = this.changePage.bind(this);
    }

componentDidMount(){
    this.getOrder();
}


getOrder(){
  $.ajax({
    method: "POST",
    url: DomainAPIURL+"/api/orders/history",
    dataType:'json',
    headers:{
       "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
    },

    success: function(data){
      let newArray = data.data;
       orderArray =this.sortDate(newArray); //排序成時間後面越前面 orderArray就是第一次抓的資料且排序完成
       pagedArray =  this.setPages(orderArray);  //pagedArray 就是分頁後的array
       this.setState({items:pagedArray});
    }.bind(this), //是個坑  無命名function奧在手動作bind

    error: function(data){
      console.log(data);
    },
  });
}

setPages(orderArray){ //傳入array做 頁數處理 出來會變成巢狀迴圈

  let result = [];//最後結果
  let tenArray = []; //十個一組的array
  let pages = Math.ceil(orderArray.length/10);

  for(let i=0; i < pages; i++){
     tenArray=[];//每組一次頁 都要先清空 不然會疊加
     for(let y= (i*10);y <= (i*10+9);y++){
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


searchItem(date1,date2,stateOption){ //處理搜尋傳來的結果並建造新array後setState

    let newSearchArray=[];

    if(!date1||!date2){  //沒選日期的狀況 只排序狀態
      switch (stateOption) {
        case '4':
            for(let i=0;i < orderArray.length;i++){
              if(orderArray[i].StatusCode == 4){
              newSearchArray.push(orderArray[i]);
              }
            }
            pagedArray =  this.setPages(newSearchArray);
            this.setState({items:pagedArray,CurrentPage:1});
          break;
         case '6':
         for(let i=0;i < orderArray.length;i++){
           if(orderArray[i].StatusCode == 6){
           newSearchArray.push(orderArray[i]);
           }
         }
         pagedArray =  this.setPages(newSearchArray);
         this.setState({items:pagedArray,CurrentPage:1});
         break;
         case '5':
         for(let i=0;i < orderArray.length;i++){
           if(orderArray[i].StatusCode == 5){
           newSearchArray.push(orderArray[i]);
           }
         }
         pagedArray =  this.setPages(newSearchArray);
         this.setState({items:pagedArray,CurrentPage:1});
         break;
         case '7':
         for(let i=0;i < orderArray.length;i++){
           if(orderArray[i].StatusCode == 7){
           newSearchArray.push(orderArray[i]);
           }
         }
         pagedArray =  this.setPages(newSearchArray);
         this.setState({items:pagedArray,CurrentPage:1});
         break;
        default:
        pagedArray =  this.setPages(orderArray);
        this.setState({items:pagedArray,CurrentPage:1});
      }
      return;
    } //end of 沒選日期狀況


    let Listdate;
    let status;

    for(let i=0;i < orderArray.length;i++){
      Listdate = new Date(orderArray[i].SubmittedDate); //每筆時間
      status = orderArray[i].StatusCode;//每筆狀態
      if(Listdate > date1 && Listdate < date2){
        switch (stateOption) {
          case '4':
                if(orderArray[i].StatusCode == 4){
                newSearchArray.push(orderArray[i]);
                }
            break;
          case '6':
             if(orderArray[i].StatusCode == 6){
             newSearchArray.push(orderArray[i]);
             }
           break;
          case '5':
             if(orderArray[i].StatusCode == 5){
             newSearchArray.push(orderArray[i]);
              }
            break;
          case '7':
            if(orderArray[i].StatusCode == 7){
            newSearchArray.push(orderArray[i]);
            }
           break;
          default:
         newSearchArray.push(orderArray[i]);
        }
      }
    }

    pagedArray =  this.setPages(newSearchArray);
    this.setState({items:pagedArray,CurrentPage:1});
}


sortDate(newArray){
  newArray.sort(function(a,b){
     return a.SubmittedDate < b.SubmittedDate ? 1 : -1;
  });
  return   newArray;
}


changePage(page){
  this.setState({CurrentPage:page});

}


    render() {

      let  printIsNotNull = this.state.items[this.state.CurrentPage - 1];   //如果沒有資料必須塞空陣列，不然會有error
        if(!printIsNotNull){
          printIsNotNull = [];
        }

        return (
          <div>
          <div className="historyHeader">
        	  <div className="container">
                <div className="profilo_con">
                  <h1 className="col-md-2"></h1>
                  <h2 className="col-md-2"></h2>
                </div>
        	  </div>
        	</div>

          <main>
      	    <div className="container">
      			<div className="row col-md-12">
      				<h3>我的购物史</h3>
              <HistorysInput searchItem={this.searchItem}/>
      			</div>
      			<div className="row col-md-12">
      				<div className="table-responsive">
      				  <table className="table table-striped">
      				    <thead>
      				      <tr>
      				        <th className="col-md-1">序号</th>
      				        <th>日期</th>
      				        <th className="col-md-4">名称</th>
      				        <th className="col-md-1">数量</th>
      				        <th>总火箭币</th>
      				        <th>状态</th>
      				        <th>快递单号</th>
      				      </tr>
      				    </thead>
      				    <tbody>

                    {printIsNotNull.map(function(item){
                      return(
                        <HistorysItem
                          key={item.Id}
                          id={item.Id}
                          date={item.SubmittedDate}
                          serialNumber={item.Id}
                          name={item.ProductName}
                          quantity={item.Quantity}
                          total={item.TotalPoint}
                          state={item.StatusName}
                          fastNumber={item.TotalPoint}
                          OrderTracker={item.OrderTracker}
                          OrderTrackerUrl={item.OrderTrackerUrl}
                          />
                      );
                    }.bind(this))}

      				    </tbody>
      				  </table>
                <Pagination defaultCurrent={1} total={this.state.items.length*10} onChange={this.changePage} current={this.state.CurrentPage} />
      				</div>
      			</div>
      			<div className="row col-md-12">
      				<div className="baner_promo"><a target="_blank" href="http://www.ggcarry.com/news/" ><img src={require('../images/banner/detail_banner.jpg')} /></a></div>
      			</div>

      	    </div>
          </main>
        </div>
        )
    }
}
