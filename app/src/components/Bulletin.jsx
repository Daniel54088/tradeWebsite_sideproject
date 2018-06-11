import React from 'react';
import Typed from 'typed.js';

export default class Bulletin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount(){


      var options = {
        strings: ['The <strong>LTC</strong> is online  NOW!!!!','BTC will stop trading in 2018/10/10 13:00 - 14:00','Chars &times; &copy;','<a href="https://github.com/Daniel54088" target="_blank">https://github.com/Daniel54088</a>'],
        typeSpeed: 30,
        backSpeed: 0,
        backDelay: 2000,
        startDelay: 1000,
        loop: true
      }

      var typed = new Typed("#element", options);

    }


    render() {

      return (
        <div className="bulletin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                      <i className="fas fa-bullhorn fa-2x" style={{'marginRight':'10px'}}></i>
                      <span id="element"></span>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
