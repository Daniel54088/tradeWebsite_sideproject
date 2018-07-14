import React from 'react';


export default class RankingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {



      return (
        <div className="ranking_item col-md-12 col-xs-12">

          <div className="rank col-md-4 col-xs-4">
             <h3>No. {this.props.rank}</h3>
          </div>

          <div className="player col-md-4 col-xs-4">

            <div className="name ">{this.props.account}</div>
          </div>

          <div className="score col-md-4 col-xs-4">

            <img src={this.props.pic}/>
            <span>{this.props.amount_format}</span>
          </div>

        </div>
        )
    }
}
