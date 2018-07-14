import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';



import Contact from './contact/contact.jsx'
//import Download from './download/Download.jsx'
import TradeTab from './trade/TradeTab.jsx'
import TradeDetail from './trade/TradeDetail.jsx'
import ForgetPassword from './loginlobby/ForgetPassword.jsx';
import WalletHistory from './wallet/WalletHistory.jsx';
import Init from './main.jsx';
import Information from './information/Information.jsx';
import Member from './member/Member.jsx';
import Memberset from './member/Memberset.jsx';
import NotFoundPage from './nofind/nofind.jsx';
import Ranking from './ranking/ranking.jsx'
import RankingList from './ranking/rankingList.jsx'
import Register from './loginlobby/Register.jsx';
import SignIn from './loginlobby/SignIn.jsx';
import Welcome from './welcome/welcome.jsx';
import ApplePen from './welcome/ApplePen.jsx';
import ClearFix from './welcome/ClearFix.jsx';


ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="member/:type"  component={Member} />

        <Route path="trade" component={TradeTab} />
        <Route path="/" component={Init} >
            <IndexRoute component={Welcome}/>
            <Route path="signin" component={SignIn} />
            <Route path="register" component={Register} />
            <Route path="memberset" component={Memberset} />
            <Route path="forgetpassword" component={ForgetPassword} />
            <Route path="news/:Id" component={Information} />
            <Route path="trade/:Id" component={TradeDetail} />
            <Route path="contact" component={Contact} />
            <Route path="ranking" component={Ranking} />
            <Route path="ranking/:type" component={RankingList} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>

    </Router>
    , document.querySelector('#init')
)
