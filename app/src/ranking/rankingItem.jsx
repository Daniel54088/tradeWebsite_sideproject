import React from 'react';


export default class RankingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
      let ranking_pic ;
      switch(this.props.rank) { //根據排名有不同的顯示
        case '1':
          ranking_pic = <img src={require('../images/ranking/rankingno1.png')}/>;
        break;
        case '2':
          ranking_pic =  <img src={require('../images/ranking/rankingno2.png')}/>;
        break;
        case '3':
          ranking_pic =  <img src={require('../images/ranking/rankingno3.png')}/>;
        break;
        default:
          ranking_pic =   <span>No. {this.props.rank}</span>;
      }



      return (
        <div className="ranking_item">
          <div className="rank">
            {ranking_pic}
          </div>
          <div className="player">

            <div className="name">{this.props.account}</div>
          </div>
          <div className="score">

            <img src={this.props.pic}/>
            <span>{this.props.amount_format}</span>
          </div>
          <div className="bonus">

            <img src={this.props.pic}/>
            <span>{this.props.amount_format}</span>
          </div>
        </div>
        )
    }
}
