import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import LoginHead from './LoginHead.jsx'
import {cx} from '../mutipleClass.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           HamToggleClass:'header_yellowline',
           Hamopen: false,
        }
        this.toggleRWDMenu = this.toggleRWDMenu.bind(this);
    }

    toggleRWDMenu(e){
      console.log(this.state.Hamopen);
       if(!this.state.Hamopen){
         let toggle =  cx({'header_yellowline showRWDMenu': true});
         this.setState({HamToggleClass:toggle,Hamopen:true});
       }else{
         let toggle =  cx({'header_yellowline': true});
         this.setState({HamToggleClass:toggle,Hamopen:false});
       }

    }

    render() {

      //新增登入前後改變 headTemplate
      var headTemplate =   <LoginHead  callback={this.props.callback}/> ;
      //根據不同頁來亮燈不同 menu item
      let tradeClass = cx({'active': location.pathname == '/trade'});
      let rankingClass = cx({'active': location.pathname == '/ranking'});
      let promotionClass = cx({'active': location.pathname == '/promotion'});
      let contactClass = cx({'active': location.pathname == '/contact'});

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

        <div className="top_grayline">
            {headTemplate}
        </div>



        </div>
        )
    }
}
