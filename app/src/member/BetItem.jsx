import React from 'react';



export default class BetItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {

      return (
        <div className="item">
          <div className="betting_price">
            <span>竞猜金额</span>
            <h3><img src={require('../images/main/gold_img.png')}/>20.0</h3>
          </div>
          <div className="get_price">
            <span>预计获得</span>
            <h3><img src={require('../images/main/gold_img.png')}/>46.42</h3>
          </div>
          <div className="betting_name">
            <span>DOTA2 QCHappy vs. X-Quest</span>
            <h3>BO7:QGHappy 让 2.5局</h3>
          </div>
          <div className="date">
            2017-12-17
          </div>
        </div>
        )
    }
}
