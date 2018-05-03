import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import LoginHead from './LoginHead.jsx'
import {cx} from '../mutipleClass.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {

      //新增登入前後改變 headTemplate
      var headTemplate =   <LoginHead  callback={this.props.callback}/> ;
      //根據不同頁來亮燈不同 menu item
      let fpkClass = cx({'active': location.pathname == '/fpk'});
      let rankingClass = cx({'active': location.pathname == '/ranking'});
      let promotionClass = cx({'active': location.pathname == '/promotion'});
      let contactClass = cx({'active': location.pathname == '/contact'});

        return (
          <div className="AllHeader">
          <div className="header_yellowline">
            <div className="wrapper">
             <header>
                <div className="top-menu">
                   <ul>
                        <li>
                          <Link to={`/fpk`} className={fpkClass}>
                            <h5>Game</h5>
                          </Link>
                        </li>

                        <li>
                          <Link to={`/ranking`} className={rankingClass}>
                            <h5>Ranking</h5>
                          </Link>
                        </li>
                        <li>
                            <Link to={`/promotion`} className={promotionClass}>
                              <h5>Promotion</h5>
                            </Link>
                        </li>
                        <li className="logo_middle">
                            <Link to={`/`} >
                              <img  src={require('../images/header/801837.svg')}/>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/contact`} className={contactClass}>
                              <h5>Contact</h5>
                            </Link>
                        </li>

                        <li >
                            <Link to={`/tutorial`}>
                                <h5>Tutorial</h5>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/signin`}>                             
                                <h5>Sign In</h5>
                            </Link>
                       </li>

                    </ul>
                </div>
             </header>
           </div>
          </div>

        <div className="top_grayline">
            {headTemplate}
        </div>

        </div>
        )
    }
}
