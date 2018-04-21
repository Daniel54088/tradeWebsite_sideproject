import React from 'react';
import FpkItem from './FpkItem';
import { Tabs, Pagination} from 'antd';
const TabPane = Tabs.TabPane;

export default class FpkList extends React.Component {
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
      const categoryArray  = [{ //之後根據清單修改array內容
          title: '小姐解開黑',
        }, {
          title: '小安寶寶開黑',
        }, {
          title: '德瑪西亞',
        }, {
          title: '熊貓直播',
      }];

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
        <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
          {categoryArray.map(function(item,index){//分類的array做map渲染
            return(
              <TabPane tab={item.title} key={String(index+1)}>
                <div className="form_group has_error">
                    <input type="text" className="input_mainpg"  placeholder="赛事名称"/><a className="btndefault"><i className="fas fa-search"></i></a>
                </div>
                  {RoomArray.map(function(item,index){ //房間的array做map渲染
                    return(
                      <FpkItem key={index} title={item.title}/>
                    );
                  })}
                <Pagination defaultCurrent={1} total={50} />
              </TabPane>
            );
          })}
        </Tabs>
        )
    }
}
