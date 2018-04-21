import React from 'react';
import ReactDOM from 'react-dom';
import {Spin} from 'antd'; //等待選轉組件
import { Button, notification, Alert, Popconfirm } from 'antd';
import './bill.css';
import {inputCheck} from './InputCheck.js';

let newDetail ={}  ;
let wallet ; //玩家剩多少錢
let imageUrl ;
export default class Bill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          detail:{}, //產品明細
          money:0,  //剩餘火箭幣
          style: "none", //與laoding一起 等到拿到資料改成block
          loading: true,
          commitLoading:false, //提交後的等待
          step1:"block",
          step2:"none",
          imageURL:'',
          errorMessage: "正在交付数据...",
          visible: false,
        }
        this.getDetail = this.getDetail.bind(this);
        this.getUserWallet = this.getUserWallet.bind(this);
        this.check = this.check.bind(this);
        this.setDefaultImg = this.setDefaultImg.bind(this);
        this.clearCache =   this.clearCache.bind(this);
        this.pickActiveImg = this.pickActiveImg.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancel =  this.cancel.bind(this);
    }


    componentDidMount(){
      this.getDetail(this.props.params.Id);
      this.getUserWallet();

    }


    getDetail(id){
      $.ajax({
        method: "GET",
        url:  DomainAPIURL+"api/products/product/detail/?id="+id,
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
            newDetail = data.data;
            newDetail = this.setDefaultImg(newDetail);
            imageUrl = this.pickActiveImg(newDetail);//抓出要顯示的圖片url
            this.setState({detail:newDetail,style:'block',loading:false,imageURL:imageUrl});

        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
        },
      });
    }

    getUserWallet(){ //要使用者錢包
      $.ajax({
        method: "POST",
        url:  DomainAPIURL+"api/account/wallet",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
           wallet = data.data;
           this.setState({money:wallet.Point});
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


    check(){
      let name = this.refs.name.value;
      let district = this.refs.district.value;
      let city = this.refs.city.value;
      let state = this.refs.state.value;
      let mailNumber  = this.refs.mailNumber.value ;
      let address =  this.refs.address.value;
      let mobile = this.refs.mobile.value;

      let isPass = inputCheck(name,district, city,state,mailNumber,address, mobile);  //從 InputCheck.js轉過來的檢查function


     if(!isPass.status){   //如果有檢察錯誤
        notification.config({top: 60});
        notification.error({
          message: isPass.message,
          duration: 2,
        });
        return;
     }
     this.setState({ visible: true }); //讓確認視窗彈出來給選擇

    }//end of check


    confirm(){ //確認購買
      let name = this.refs.name.value;
      let district = this.refs.district.value;
      let city = this.refs.city.value;
      let state = this.refs.state.value;
      let mailNumber  = this.refs.mailNumber.value ;
      let address =  this.refs.address.value;
      let mobile = this.refs.mobile.value;
      this.setState({ visible: false }); //讓確認視窗彈出來消失
             $.ajax({
               method: "POST",
               url: DomainAPIURL+"api/orders/create",
               dataType:'json',
               headers:{
                  "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
               },
               data:{
                  "ShippingAddress": mailNumber+state+city+district+address,
                  "Recipient":name,
                  "EmailAddress":'',
                  "ContactNumber":mobile,
                  "ProductId":this.props.params.Id,
                  "Quantity":this.props.params.Count,
               },
               beforeSend:function(){
                 this.setState({commitLoading:true});
               }.bind(this),

               success: function(data){
                    this.setState({commitLoading:false,step1:'none',step2:'block'});
                    this.clearCache();
                    window.opener.document.location.reload(); //購買成功後 原本頁面重新整理
               }.bind(this), //是個坑  無命名function奧在手動作bind

               error: function(data){
                 let obj = JSON.parse(data.responseText); //先把json轉成物件

                 switch (obj.err_code) {
                   case "R0016":
                   this.setState({errorMessage:'不好意思，此商品已经售罄，请关掉此页并选择其他商品购买'});
                     break;
                   default:

                 }
               }.bind(this),
             });

       } //end of Confirm()

    cancel(){
      this.setState({ visible: false });

    } //end of cancel()



    clearCache(){ //買成功後清cache
      $.ajax({
        method: "GET",
        url: DomainAPIURL+"api/products/Clear",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
          console.log(data);
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){

        }.bind(this),
      });

    }


    render() {

      return (
        <div>
        <main id="billMain">
          <Spin tip={this.state.errorMessage} spinning={this.state.commitLoading} >
    	      <div className="container popstep1" style={{display:this.state.step1}}>

                <nav className="navbar navbar-default navbar-fixed-top navbar-color">
              <div id="pop_header">
                  <h1>{this.state.detail.Name}</h1>
              </div>
            </nav>
              <Spin spinning={this.state.loading} size="large"></Spin>
                <div className="row" style={{"display":this.state.style}}>

                  <div className="col-md-7">
                    <div className="col-xs-6 product_pop"><img  src={this.state.imageURL}/></div>
                    <div className="product_popcon col-xs-6">
                      <h4>{this.state.detail.Name}</h4>
                      <p>{this.state.detail.Description}</p>
                      <ul>
                        <li><span>所需火箭币</span><div className="pricety2">{this.state.detail.RedeemPoints * this.props.params.Count}</div></li>
                        <li><span>数量</span><div className="pro_cunt">{this.props.params.Count}</div></li>
                      </ul>
                    </div>
                    <div className="pro_submit">
                      <Popconfirm title="请确认您的收件资料是否正确，送出后无法变更!" visible={this.state.visible} onConfirm={this.confirm} onCancel={this.cancel}>
                      <Button className="btn btn-primary" onClick={this.check}>提　交</Button>
                      </Popconfirm>
                      <button className="btn btn-secondary" onClick={window.close}>取　消</button>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="product_popfllin">
                      <p>标有*号信息必须填写完整</p>
                      <div className="field"><label>收件人</label>
                        <input type="text"  maxLength="5" ref="name" placeholder="请输入收件人" className="input_text medium" />
                          <span className="necessary">*</span>
                      </div>
                      <div className="field">
                        <label>区　域</label>
                         <input type="text" maxLength="5" ref="district" placeholder="区域" className="input_text medium" rel="short" />
                         <span className="necessary">*</span>
                        <label>城　市</label>
                         <input type="text" maxLength="5" ref="city" placeholder="城市" rel="short" className="input_text medium" />
                         <span className="necessary">*</span>
                      </div>
                      <div className="field">
                        <label>省　份</label>
                          <input type="text" maxLength="5" ref="state" placeholder="省份" className="input_text medium" rel="short" />
                          <span className="necessary">*</span>
                        <label>邮政编码</label>
                          <input type="text" maxLength="5" ref="mailNumber" placeholder="邮政编码" rel="short" className="input_text medium" />
                          <span className="necessary">*</span>
                      </div>
                      <div className="field">
                        <label>详细地址</label>
                          <input type="text" maxLength="30" ref="address" placeholder="请输入收件人收件地址" className="input_text medium"/>
                          <span className="necessary">*</span>
                      </div>
                      <div className="field">
                        <label>手机号码</label>
                          <input type="text" maxLength="20" ref="mobile" placeholder="请输入收件人手机号码" className="input_text medium"/>
                          <span className="necessary">*</span>
                      </div>
                      <div className="field">
                        <label rel="textarea">备注</label>
                        <textarea type="text" maxLength="80" ref="note"  placeholder="请输入备注讯息" className="input_text medium"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

          <div className="container popstep2" style={{display:this.state.step2}}>
            <nav className="navbar navbar-default navbar-fixed-top navbar-color">
              <div id="pop_header">
                  <h1>交易成功</h1>
              </div>
            </nav>
            <div className="row">
              <div className="col-md-12"><p>您的兑换申请已成功提交。感谢您对火竞猜的支持和信任，您可在选择继续购物，亦可回到火竞猜享受游戏。 谢谢。</p></div>

            </div>
          </div>


        </Spin>

      </main>
      </div>
        )
    }
}
