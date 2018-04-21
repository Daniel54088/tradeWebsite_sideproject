import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory } from 'react-router';
import { Button, notification, Tooltip  } from 'antd';
import './detail.css';

let newDetail ={}  ;
let wallet ; //玩家剩多少錢
let imageUrl ;
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          detail:{},
          needMoney: 0,
          quantity:1,
          money:0,
          imageURL:'',

        }
        this.getDetail = this.getDetail.bind(this);
        this.getUserWallet = this.getUserWallet.bind(this);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.check = this.check.bind(this);
        this.setDefaultImg = this.setDefaultImg.bind(this);
        this.pickActiveImg = this.pickActiveImg.bind(this);
    }

    componentDidMount(){
      this.getDetail(this.props.params.Id);
      this.getUserWallet();
    }

    getDetail(id){

      $.ajax({
        method: "GET",
        url: DomainAPIURL+"/api/products/product/detail/?id=" +id,
        dataType:'json',
        success: function(data){
            if(data.status  == false ){  //如果沒有這商品 導回首頁
                browserHistory.push('/');
            }
            if(data.data.StockCount == 0){ //如果商品庫存為0 導回首頁
              browserHistory.push('/');
            }
          newDetail = data.data;
          newDetail = this.setDefaultImg(newDetail);//沒有圖片將圖片做預設
          imageUrl = this.pickActiveImg(newDetail);//抓出要顯示的圖片url
          this.setState({detail:newDetail,needMoney:newDetail.RedeemPoints,imageURL:imageUrl});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          if(data.status  == 500 ){//如果沒有這商品 導回首頁
              browserHistory.push('/');
          }
        },
      });
    }

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


    setDefaultImg(detail){   //先攔截沒有圖片的並給予預設圖片

      if(detail.Attachments.length == 0){
         detail.Attachments[0] = {AttachmentSource: '/src/images/main/product_default.jpg'};
      }else{
        for(let y=0 ; y < detail.Attachments.length ; y++){
           detail.Attachments[y].AttachmentSource = '/reward/image/' + detail.Attachments[y].AttachmentSource;
        }
      }

      return detail;
    }

    pickActiveImg(detail){

      let imgUrl ;    //選出最新上傳的照片
      if(detail.Attachments.length > 1){
        for (var i = 0; i < detail.Attachments.length; i++) {
          if(detail.Attachments[i].IsActive){
            imgUrl = detail.Attachments[i].AttachmentSource;
          }
        }
      }else{
        imgUrl = detail.Attachments[0].AttachmentSource;
      }
      return imgUrl;
    }


    add(){
      if(this.state.quantity >= this.state.detail.StockCount ){ return;} //不可超過庫存

      this.setState({quantity:this.state.quantity + 1,needMoney: (this.state.quantity + 1) * newDetail.RedeemPoints});
    }

    minus(){
      if(this.state.quantity ==1){return;}   //不可比 1 小
      this.setState({quantity:this.state.quantity - 1,needMoney: (this.state.quantity - 1) * newDetail.RedeemPoints});
    }


    check(){
       //只要有需要結帳動作的funciton都要先檢查是否有登入，如果沒有就refresh
      $.ajax({
        method: "POST",
        url: DomainAPIURL+"/api/account/wallet",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },
        success: function(data){
          if(!data.status){
            if(data.err_code == '890001' || data.err_code == '890002'|| data.err_code == '890003'|| data.err_code == '890004' ){ //登入有誤時的判斷 不准買東西
            alert('请重新登入后购买');
            location.reload();
            }
          }
        },
        error: function(data){
          console.log(data);
        }
      });


      if(this.state.needMoney > this.state.money){ //檢查是否餘額不足
        notification.config({
          top: 100
        });
        notification.error({
          message: '馀额不足',
          description: '',
          duration: 2,
        });
        return;
      }
      window.open(`/bill/${this.props.params.Id}/${this.state.quantity}`,'' ,  "width=1200, height=561, top=100 ,left=1000");

    }


    render() {

      let  loginButtonTemplate ;
      if(isLogin){    //判斷是否有登入，並顯示相對應畫面 isLogin來自coookie.js
      loginButtonTemplate  = <Button className="btn btn-primary" onClick={this.check} >立即购买</Button>
      }else {
      loginButtonTemplate = <Tooltip  title="请登入后才能购买"><Button className="btn btn-primary" onClick={this.check} disabled="true">立即购买</Button></Tooltip >
      }

      return (
        <div>
        <div className="headerDetail">
      	  <div className="container">
              <div className="product_con">
              	<h1 className="col-md-2">商品详情</h1>

              </div>
      	  </div>
          </div>
          <main>
      	    <div className="container">
      			<div className="row col-md-12">
      				<h3><Link to={`/category/${this.state.detail.ProductCategoryId}`}>{this.state.detail.ProductCategoryName}</Link><i className="ico-menu"></i><p>{this.state.detail.Name}</p></h3>
      			</div>
      			<div className="row col-md-12">
      			    <div className="product_detailcon">
      			    	<div className="col-md-6"><div className="product_detailimg"><img src={this.state.imageURL}/></div></div>
      			    	<div className="col-md-6">
      			    		<h4>{this.state.detail.Name}</h4>
      			    		<p>{this.state.detail.Description}</p>
                    <hr></hr>
      			    		<div className="product_detailcount"><span>所需火箭币</span><div className="pricety2">{this.state.detail.RedeemPoints}</div></div>
      			    		<div className="product_detailcount"><span>当前火箭币</span><div className="pricety2">{this.state.money}</div></div>
      			    		<div className="product_detailamount">
                      <p>购买数量</p>
      			    			<button onClick={this.minus}>-</button><input type="text" ref={(input) => this.input = input} size="2"  value={this.state.quantity} size="2"  readOnly="readonly" />
                      <button onClick={this.add}>+</button><p>/<span>{this.state.detail.StockCount}</span>+(库存)</p>
      			    			<div className="pricety2">{this.state.needMoney}</div>
      			    		</div>
      			    		<div className="product_detailtotal"><p>总和</p><div className="pricety2">{this.state.needMoney}</div></div>
      			    		<div className="product_detailsubmit">
                        {loginButtonTemplate}
                    </div>
      			    	</div>
      			    </div>
      			</div>
      			<div className="row col-md-12">
      				<div className="baner_promo"><a target="_blank" href="http://www.ggcarry.com/news/1421" ><img src={require('../images/banner/detail_banner.jpg')} /></a></div>
      			</div>

      	    </div>
          </main>
</div>
        )
    }
}
