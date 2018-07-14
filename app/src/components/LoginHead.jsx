import React from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import Bulletin from './Bulletin.jsx';
import { Menu, Dropdown , Icon} from 'antd';
const MenuItemGroup = Menu.ItemGroup;



let whichTab;
let depositCategory;
export default class LoginHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.tabswitch = this.tabswitch.bind(this);
    }


    tabswitch(e){   //for member and wallet頁tab
      switch(e.target.getAttribute('data-tab')) {  //判斷是按哪一個  for 大標題
        case 'profile':   //member頁
        case 'deposit_bank':  //wallet頁
        case 'deposit_qqpay': //wallet頁
        case 'deposit_jingdongpay': //wallet頁
        case 'deposit_localbank': //wallet頁
        case 'deposit_card': //wallet頁
        whichTab= '1';
        break;
        case 'betting': //member頁
        case 'withdrawal': //wallet頁
        whichTab= '2';
        break;
        case 'mission'://member頁
        case 'bonus'://wallet頁
        whichTab= '3';
        break;
        case 'accountmanagement'://member頁
        case 'history'://wallet頁
        whichTab= '4';
        break;

        default:
        whichTab= '0';
      }
      switch(e.target.getAttribute('data-tab')) {  //判斷是按哪一個  for 小標題

        case 'deposit_bank':  //wallet頁
        depositCategory= '1';
        break;
        case 'deposit_qqpay': //wallet頁
        depositCategory= '2';
        break;
        case 'deposit_localbank': //wallet頁
        depositCategory= '3';
        break;
        case 'deposit_card': //wallet頁
        depositCategory= '4';
        break;
        default:
        depositCategory= '0';
      }

      this.props.callback(whichTab,depositCategory); //從member頁面傳過來的function，為了判斷是要去member哪個tab
    }

    render() {
      const personalCenter = ( //個人中心下拉選單  //走兩種模式，第一種在member底下按走onClick={this.tabswitch}，第二種在其他地方按走Link  to=
        <Menu>
          <MenuItemGroup title="竞猜">
              <Menu.Item>
                <Link  to={{ pathname: `/member/profile` }} data-tab='profile' onClick={this.tabswitch}>profile</Link>
              </Menu.Item>
              <Menu.Item>
                <Link  to={{ pathname: `/member/betting` }} data-tab='betting' onClick={this.tabswitch}>Distribution History</Link>
              </Menu.Item>
              <Menu.Item>
                  <Link to={{ pathname: `/member/mission` }} data-tab='mission' onClick={this.tabswitch}>Mission</Link>
              </Menu.Item>
              <Menu.Item>
                  <Link to={{ pathname: `/member/accountmanagement` }} data-tab='accountmanagement' onClick={this.tabswitch}>Bank Account</Link>
              </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup title="个人">
              <Menu.Item>
                <Link to={{ pathname: `/memberset` }} data-tab='memberset' onClick={this.tabswitch}>Edit profile</Link>
              </Menu.Item>
          </MenuItemGroup>
        </Menu>
      );


      const  personalWallet = ( //個人錢包下拉選單
        <Menu>
          <MenuItemGroup title="存款">
              <Menu.Item>
                  <Link  to={{ pathname: `/wallet/deposit_bank` }} data-tab='deposit_bank' onClick={this.tabswitch}>在线存款</Link>
              </Menu.Item>
              <Menu.Item>
                 <Link  to={{ pathname: `/wallet/deposit_qqpay` }} data-tab='deposit_qqpay' onClick={this.tabswitch}>QQ支付</Link>
              </Menu.Item>
              <Menu.Item>
                 <Link  to={{ pathname: `/wallet/deposit_localbank` }} data-tab='deposit_localbank' onClick={this.tabswitch}>本地银行/支付宝</Link>
              </Menu.Item>
              <Menu.Item>
                 <Link  to={{ pathname: `/wallet/deposit_card` }} data-tab='deposit_card' onClick={this.tabswitch}>火卡充值</Link>
              </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup title="提款">
              <Menu.Item>
                <Link  to={{ pathname: `/wallet/withdrawal` }} data-tab='withdrawal' onClick={this.tabswitch}>便捷提款</Link>
              </Menu.Item>
          </MenuItemGroup>
        </Menu>
      );

        return (

          <div className="top_float clearfix">
            <div className="top clearfix">
               <Bulletin/>

              <div className="top_box clearfix">
                {/*
                <Dropdown overlay={personalCenter}>
                  <a className="ant-dropdown-link">
                      <img src={require('../images/header/23103.svg')} />
                  </a>
                </Dropdown>

                <Dropdown overlay={personalWallet}>
                  <a className="ant-dropdown-link" >
                    <img src={require('../images/header/163064.svg')} />
                  </a>
                </Dropdown>*/}

              </div>
            </div>
          </div>

        )
    }
}
