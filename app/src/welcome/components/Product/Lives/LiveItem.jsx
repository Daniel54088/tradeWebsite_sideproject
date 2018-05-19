import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';



export default class LiveItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


      return (
        <div className="liveing">

            <div className="liveing_img"><Link><img src={this.props.image}/></Link></div>

            <div className="liveing_text">

            <h4>{this.props.name}</h4><p className="game_type game_01 clearfix">24h</p>
            <p className="liveingtext">Last Price: {this.props.price}</p>

            </div>
        </div>
        )
    }
}
