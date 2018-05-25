import React from 'react';
import TradeItem from './TradeItem';


export default class TradeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }




    render() {


      return (
        <div>
                  {this.props.dataArray.map(function(item,index){ //房間的array做map渲染
                    return(
                      <TradeItem key={index} title={item.title}/>
                    );
                  })}

        </div>
        )
    }

}
