import React from 'react';
import ReactDOM from 'react-dom';
import { Button, notification, Tooltip } from 'antd';
import { browserHistory } from 'react-router';


export default class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          needMoney: this.props.price,
          quantity:1,
        }
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.inputQuantity = this.inputQuantity.bind(this);
        this.check = this.check.bind(this);
    }

    add(){
      if(this.state.quantity >= this.props.stock ){ return;} //不可超過庫存
      this.setState({quantity:this.state.quantity + 1,needMoney: (this.state.quantity + 1) * this.props.price });
    }

    minus(){
      if(this.state.quantity ==1){return;}   //不可比 1 小
      this.setState({quantity:this.state.quantity - 1,needMoney: (this.state.quantity - 1) * this.props.price});
    }

    inputQuantity(){
         this.input.value  = parseInt(this.input.value);
      this.setState({quantity:this.input.value, needMoney: this.input.value * this.props.price});
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


      if(this.props.price > this.props.money){ //檢查是否餘額不足
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

      window.open(`/bill/${this.props.id}/${this.state.quantity}`,'' ,  "width=1200, height=561, top=100 ,left=1000");


    }

    render() {

      let  loginButtonTemplate ;
      if(isLogin){    //判斷是否有登入，並顯示相對應畫面 isLogin來自coookie.js
      loginButtonTemplate  = <Button className="btn btn-primary" onClick={this.check} >立即购买</Button>
      }else {
      loginButtonTemplate = <Tooltip  title="请登入后才能购买"><Button className="btn btn-primary" onClick={this.check} disabled="true">立即购买</Button></Tooltip >
      }


      let imgUrl ;    //選出最新上傳的照片
      if(this.props.img.length > 1){
        for (var i = 0; i < this.props.img.length; i++) {
          if(this.props.img[i].IsActive){
            imgUrl = this.props.img[i].AttachmentSource;
          }
        }
      }else{
        imgUrl = this.props.img[0].AttachmentSource;
      }

      let isNew = '';
      let isHot = '';
      let isRecommand = '';
      if(this.props.new){   //是否為限量好禮
        isNew = <i className="type_icon limit_icon">限量好礼</i> ;
      }
      if(this.props.hot){   //是否為限量好禮
        isHot = <i className="type_icon hot_icon">火粉疯抢</i> ;
      }
      if(this.props.recommand){   //是否為限量好禮
        isRecommand = <i className="type_icon remcom_icon">火编推荐</i> ;
      }

      return (

                    <div className="col-md-12">
                      <div className="search_detaillist">
                        <div className="col-md-2"><div className="product_detailimg"><img src={imgUrl} /></div></div>
                        <div className="col-md-6">
                  <div className="product_detailamount">
                    <h4>{this.props.title}</h4>
                          <p>{this.props.description}</p>
                          <div className="product_detailamtbtn">
                                {isRecommand}{isNew}{isHot}
                              <div className="product_countpro">
                                 <button onClick={this.minus}>-</button><input type="tel" ref={(input) => this.input = input} size="2"  value={this.state.quantity} readOnly="readonly" /><button onClick={this.add}>+</button><p>/<span>{this.props.stock}</span>(库存)</p>
                              </div>
                         </div>

                  </div>
                        </div>
                        <div className="col-md-2 dotted">
                                <div className="product_detailcount"><span>单价</span><div className="pricety2">{this.props.price}</div></div>
                      <div className="product_detailcount"><span>当前火箭币</span><div className="pricety2">{this.props.money}</div></div>
                        </div>
                        <div className="col-md-2 dotted">
                  <div className="product_detailtotal"><p>总和</p><div className="pricety2">{this.state.needMoney}</div></div>
                  <div className="product_detailsubmit">{loginButtonTemplate}</div>
                        </div>
                      </div>
                    </div>

        )
    }
}
