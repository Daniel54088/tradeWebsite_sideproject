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
      let inPlayClass = cx({'active': location.pathname == '/inplay'});
      let fpkClass = cx({'active': location.pathname == '/fpk'});
      let rankingClass = cx({'active': location.pathname == '/ranking'});
      let promotionClass = cx({'active': location.pathname == '/promotion'});
      let contactClass = cx({'active': location.pathname == '/contact'});

        return (
          <div className="AllHeader">
            <div className="top_grayline">
              {headTemplate}
            </div>

          <div className="header_yellowline">
            <div className="wrapper">
             <header>
                <div className="top-menu">
                    <div className="logo clearfix">
                         <Link to={`/`} >
                            <img  src={require('../images/logo.png')}/>
                         </Link>
                    </div>

                   <ul>
                        <li >
                            <Link to={`/inplay`} className={inPlayClass} >
                            <img  className="menu-img" src={require('../images/header/btn.png')}/>
                            <img  className="menu-img2" src={require('../images/header/btn2.png')}/>
                            <h5>火竞猜</h5>
                            </Link>
                        </li>

                        <li>
                          <Link to={`/fpk`} className={fpkClass}>
                            <img  className="menu-img" src={require('../images/header/fpk_btn.png')}/>
                            <img  className="menu-img2" src={require('../images/header/fpk_btn2.png')}/>
                            <h5>趣味競猜</h5>
                          </Link>
                        </li>

                        <li>
                          <Link to={`/ranking`} className={rankingClass}>
                            <img  className="menu-img" src={require('../images/header/ranking_btn.png')}/>
                            <img  className="menu-img2" src={require('../images/header/ranking_btn2.png')}/>
                            <h5>排行榜</h5>
                          </Link>
                        </li>

                        <li>
                            <Link to={`/promotion`} className={promotionClass}>
                              <img  className="menu-img" src={require('../images/header/promotion.png')}/>
                              <img  className="menu-img2" src={require('../images/header/promotion2.png')}/>
                              <h5>优惠活动</h5>
                            </Link>
                        </li>

                        <li>
                            <a href="https://reward.ggcarry.com/">
                              <img  className="menu-img" src={require('../images/header/sale.png')}/>
                              <img  className="menu-img2" src={require('../images/header/sale2.png')}/>
                              <h5>商城</h5>
                            </a>
                        </li>

                        <li>
                            <Link to={`/contact`} className={contactClass}>
                              <img  className="menu-img" src={require('../images/header/contact.png')}/>
                              <img  className="menu-img2" src={require('../images/header/contact2.png')}/>
                              <h5>联系我们</h5>
                            </Link>
                        </li>

                        <li className="menu_spec">
                            <Link to={`/tutorial`}>
                                <img  className="menu-img" src={require('../images/header/contact.png')}/>
                                <img  className="menu-img2" src={require('../images/header/contact2.png')}/>
                                <h5>新手教学</h5>
                            </Link>
                        </li>

                        <li className="menu_spec">
                            <a href="https://lm.ggcarry.com/">
                              <img  className="menu-img" src={require('../images/header/contact.png')}/>
                              <img  className="menu-img2" src={require('../images/header/contact2.png')}/>
                                <h5>加入联盟</h5>
                            </a>
                        </li>

                        <li>
                            <a href="download.html">
                              <img className="menu_download" src={require('../images/header/iphone.png')}/>
                            </a>
                       </li>
                    </ul>
                </div>
             </header>
           </div>
          </div>
        </div>
        )
    }
}
