import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../welcome/components/Slider.jsx';
import CategoryItem from './categoryItem.jsx';
import {Spin} from 'antd'; //等待選轉組件
import './category.css';


export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          items:[],
          loading:true,
          isProduct:false,
          categoryName:'',
        }
        this.getCategoryProduct = this.getCategoryProduct.bind(this);
        this.checkStock = this.checkStock.bind(this);
        this.setDefaultImg = this.setDefaultImg.bind(this);

    }

    componentDidMount(){
      this.getCategoryProduct(this.props.params.type);
    }

    getCategoryProduct(type){
      $.support.cors = true;
      $.ajax({
        method: "GET",
        url: DomainAPIURL+"api/products/list/product/categoryid?id=" +type,
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
           let categoryName;
           let newArray = this.checkStock(data.data);
           newArray = this.setDefaultImg(newArray);
           if(newArray[0]){
             categoryName = newArray[0].ProductCategoryName;
           }else {
             categoryName = '';
           }
           this.setState({items:newArray,loading:false,categoryName:categoryName});

           if(newArray.length == 0){ //如果沒有商品 show出Spin字樣
             this.setState({isProduct:true});
           }

        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
        },
      });

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
          <main>
            <Slider />
          <div className="container">
            <div className="row col-md-12">
              <h3>{this.state.categoryName}</h3>
              <div className="category">
                <Spin tip="本类别商品皆已售罄，请至其他类别继续购买" spinning={this.state.isProduct} >
                <Spin spinning={this.state.loading} size="large"></Spin>
                {this.state.items.map(function(item){
                  return(
                    <CategoryItem
                      key={item.Id}
                      id={item.Id}
                      name={item.Name}
                      cost={item.RedeemPoints}
                      img={item.Attachments}
                      />
                  );
                }.bind(this))}
              </Spin>
              </div>
            </div>
          </div>
          </main>
        </div>
        )
    }

}
