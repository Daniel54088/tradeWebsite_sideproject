import React from 'react';
import { Link, IndexLink } from 'react-router';
import {cx} from '../../../../mutipleClass.js';
import ClearFix from '../../../ClearFix.jsx';


export default class LiveItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
      let upordownClass = cx({'up': Number(this.props.change) > 0,'down': Number(this.props.change) < 0 });


      return (
        <div className="col-md-6 coin-item">

            <div className="liveing_img"><Link><img src={this.props.image}/></Link></div>

            <div className="liveing_text">

            <h4>{this.props.name}</h4>
            <p className="liveingtext">Last Price: {this.props.price}</p>
            <p className="liveingtext">24h Change: <a className={upordownClass}>{this.props.change}  /  {this.props.percent}</a></p>
            </div>
            <ClearFix/>
        </div>
        )
    }
}
