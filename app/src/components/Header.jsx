import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {cx} from '../mutipleClass.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           HamToggleClass:'header_yellowline',
           Hamopen: false,
        }

    }

     toggleRWDMenu = (e) =>{

       if(!this.state.Hamopen){
         let toggle =  cx({'header_yellowline showRWDMenu': true});
         this.setState({HamToggleClass:toggle,Hamopen:true});
       }else{
         let toggle =  cx({'header_yellowline': true});
         this.setState({HamToggleClass:toggle,Hamopen:false});
       }

    }

    render() {


      //根據不同頁來亮燈不同 menu item
      let tradeClass = cx({'active': location.pathname == '/trade'});
      let rankingClass = cx({'active': location.pathname == '/ranking'});
      let TutorialClass = cx({'active': location.pathname == '/tutorial'});
      let contactClass = cx({'active': location.pathname == '/contact'});
      let profileClass = cx({'active': location.pathname == '/member/profile'});
      let signinClass = cx({'active': location.pathname == '/signin'});

        return (
          <div className="AllHeader">
          <div className={this.state.HamToggleClass}>
            <div className="wrapper">
              <div className="header_close">
                <img  src={require('../images/header/128338.svg')} id="Ham_close"  onClick={this.toggleRWDMenu}/>
              </div>
             <header>
                <div className="top-menu">
                   <ul>

                        <li>
                          <Link to={`/trade`} className={tradeClass}>
                            <h5>Trade</h5>
                          </Link>
                        </li>

                        <li>
                          <Link to={`/ranking`} className={rankingClass}>
                            <h5>Ranking</h5>
                          </Link>
                        </li>

                        <li >
                            <Link to={`/member/profile`} className={profileClass}>
                                <h5>Profile</h5>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/signin`} className={signinClass}>
                                <h5>Sign In</h5>
                            </Link>
                       </li>

                    </ul>
                </div>
             </header>
           </div>
          </div>

          <div className="top_769">
              <div className="top_float clearfix">
                  <div className="top clearfix">
                        <Link className="RwdLogo" to={`/`}></Link>
                      <div className="top_box clearfix">
                          <button className="hamburger-menu" id="Ham" onClick={this.toggleRWDMenu}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

        </div>
        )
    }
}
