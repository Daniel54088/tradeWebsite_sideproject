import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');


import './main.css';
import './main_2.css';
import './mainNew.css';
import './header_rwd.css';


// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {

      return (
           <div>
                <Header  />
                <CSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300} >
                <div id="bottomWrap" key={this.props.location.key}>
                    {this.props.children}
                </div>
                </CSSTransitionGroup>
                <Footer />
            </div>
        )
    }
}
