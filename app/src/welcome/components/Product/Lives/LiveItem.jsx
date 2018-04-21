import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';



export default class LiveItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


      return (
        <div className="live_list_1">

            <div className="live_list_img"><img src={require("../../../../images/1218323476908.jpg")}/></div><div className="live_list_text">

                <h4>果果baby</h4>

                <ul>
                    <li><i className="far fa-calendar-alt fa-1x"></i></li>
                    <li><p>12/9</p></li>
                </ul>

                <ul>
                    <li><i className="far fa-clock fa-1x"></i></li>
                    <li><p>16:00 ~ 19:00</p></li>
                </ul>

            </div>
          <hr/>
       </div>
        )
    }
}
