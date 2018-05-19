import React from 'react';
import TradeItem from './TradeItem';
import { Tabs, Pagination} from 'antd';
const TabPane = Tabs.TabPane;

export default class TradeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nowPage: '1',
        }
        this.callback = this.callback.bind(this);
    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    callback(key){
      if(key == 1){
        this.setState({nowPage:'1'});
      }else if(key == 2){
        this.setState({nowPage:'2'});
      }else{
        this.setState({nowPage:'3'});
      }
    }



    render() {
      const RoomArray  = [{ //之後根據清單修改array內容
          title: '(PUBG)2/14 牡羊宝宝第一局，游戏结束时间',
        }, {
          title: '(PUBG)2/14 第一局，牡羊宝宝拾获的第一把枪械种类',
        }, {
          title: '(PUBG)2/14 牡羊宝宝第二局，游戏结束时间',
        }, {
          title: '(PUBG)2/14 第二局，牡羊宝宝拾获的第一件防弹衣等级',
      }];

      return (
        <div>
                  {RoomArray.map(function(item,index){ //房間的array做map渲染
                    return(
                      <TradeItem key={index} title={item.title}/>
                    );
                  })}
                <Pagination defaultCurrent={1} total={50} />
        </div>        
        )
    }

}
