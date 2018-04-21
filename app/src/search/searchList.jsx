import React from 'react';
import ReactDOM from 'react-dom';

import SearchItem from './searchItem.jsx';
import './search.css';
import {Spin} from 'antd'; //等待選轉組件


let newSearchArray =[];
let wallet;
let cookie;
export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           searchArray: [],
           loading:true,
           money:0,
        }
        this.getProduct = this.getProduct.bind(this);
        this.setData =   this.setData.bind(this);
        this.getUserWallet =this.getUserWallet.bind(this);
        this.checkStock = this.checkStock.bind(this);
        this.setDefaultImg = this.setDefaultImg.bind(this);
    }

    componentDidMount(){
      this.getProduct();  //先抓一次全部資料
      this.getUserWallet();   //拿使用者錢包
    }


    getProduct(){

      $.ajax({  //開始要總商品資訊
        method: "GET",
        url: DomainAPIURL+"/api/products/product/All",
        dataType:'json',

        success: function(data){
          let newArray = this.checkStock(data.data);
          newArray = this.setDefaultImg(newArray);
          this.setData(newArray);
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
        },
      });

    } //end of getProduct


    getUserWallet(){ //要使用者錢包
      $.ajax({
        method: "POST",
        url: DomainAPIURL+"/api/account/wallet",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
          if(data.status == false){
              wallet = 0;
          }else{
              wallet = data.data.Point;
          }
          this.setState({money:wallet});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
        },
      });

    }


    setData(data){
        newSearchArray = [];
      let SearchText = this.props.params.text; //所輸入要搜尋的字串
      if(SearchText){
        SearchText = SearchText.replace(/\s+/g, "");
        SearchText = SearchText.trim();
        SearchText = SearchText.toUpperCase();
      }


      let Trim ;
      for(let i=0;i < data.length;i++){   //開始比對是否有相近的字串
          Trim = data[i].Name.replace(/\s+/g, "");  //把字串空格去除
          Trim = Trim.toUpperCase(); //換成大寫 方便之後比對
        if(Trim.search(SearchText) != -1){       //如果有類似字串就丟進 newSearchArray
            newSearchArray.push(data[i]);
        }
      }
      this.setState({searchArray:newSearchArray,loading:false});
    }


    checkStock(data){ //剔除庫存為0的商品
      let record = [];
      for(let i=0;i < data.length;i++){   //找出庫存不為0得商品為何並記錄到 record 之後回傳 record
         if(data[i].StockCount){
               record.push(data[i]);
         }
      }
      return record;
    }


    setDefaultImg(array){   //先攔截沒有圖片的並給予預設圖片
      for(let i=0; i <　array.length ; i++){
        if(array[i].Attachments.length == 0){
           array[i].Attachments[0] = {AttachmentSource: '/src/images/main/product_default.jpg'};
        }else{
           for(let y=0 ; y < array[i].Attachments.length ; y++){
              array[i].Attachments[y].AttachmentSource = '/reward/image/' +array[i].Attachments[y].AttachmentSource;
           }
        }
      }
        return array;
    }


    render() {

      return (
        <div>
        <div className="header">
      	  <div className="container">
              <div className="product_con">
              	<h1 className="col-md-2">商品搜索</h1>
              	<h2 className="col-md-2">打开火竞猜&nbsp;&nbsp;&nbsp;&nbsp;拿走福利彩</h2>
              </div>
      	  </div>
      	</div>
        <main>
          <div className="container">
          <div className="row col-md-12">
            <h3><a >{this.props.params.text} 搜索结果</a><i className="ico-menu"></i><p><span>{this.state.searchArray.length}</span>个商品结果</p></h3>
          </div>
          <div className="row col-md-12">
            <Spin spinning={this.state.loading} size="large"></Spin>
              <div className="search_detailcon">
                <h4><span>{this.state.searchArray.length}</span>个商品</h4>

              {this.state.searchArray.map(function(item){
                return(
                  <SearchItem
                    key={item.Id}
                    id={item.Id}
                    title={item.Name}
                    price={item.RedeemPoints}
                    description={item.Description}
                    stock={item.StockCount}
                    money={this.state.money}
                    img={item.Attachments}
                    new={item.ProductSettings[1].Checked}
                    recommand={item.ProductSettings[0].Checked}
                    hot={item.ProductSettings[2].Checked} />
                );
              }.bind(this))}
          </div>


          </div>
          <div className="row col-md-12">
            <div className="baner_promo"><a target="_blank" href="http://www.ggcarry.com/news/1421" ><img src={require('../images/banner/3.jpg')} /></a></div>
          </div>
          </div>
        </main>
        </div>

        )
    }

}
