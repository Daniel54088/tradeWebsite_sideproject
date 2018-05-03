import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';


console.log(Router);
import About from './guidepage/About.jsx'
import Bill from './bill/bill.jsx'
import Contact from './contact/contact.jsx'
import CategoryList from './category/categoryList.jsx'
import Detail from './detail/detail.jsx'
//import Download from './download/Download.jsx'
import FpkTab from './fpk/FpkTab.jsx'
import FpkDetail from './fpk/FpkDetail.jsx'
import ForgetPassword from './loginlobby/ForgetPassword.jsx';
import Historys from './historys/historys.jsx';
import WalletHistory from './wallet/WalletHistory.jsx';
import Help from './guidepage/help.jsx';
import Init from './main.jsx';
import Information from './information/Information.jsx';
import Inplay from './inplay/inplay.jsx'
import Member from './member/Member.jsx';
import Memberset from './member/Memberset.jsx';
import NotFoundPage from './nofind/nofind.jsx';
import PromotionList from './promotion/promotionList.jsx';
import Ranking from './ranking/ranking.jsx'
import RankingList from './ranking/rankingList.jsx'
import RankingReward from './ranking/rankingReward.jsx';
import Register from './loginlobby/Register.jsx';
import SearchList from './search/searchList.jsx'
import SignIn from './loginlobby/SignIn.jsx';
import Tutorial from './tutorial/tutorial.jsx'
import Term from './guidepage/term.jsx'
import Wallet from './wallet/Wallet.jsx';
import Welcome from './welcome/welcome.jsx';


ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/bill/:Id/:Count" component={Bill} />
        <Route path="member/:type"  component={Member} />
        <Route path="wallet/:type"  component={Wallet} />
        <Route path="promotion"  component={PromotionList} />
        <Route path="event"  component={PromotionList} />
        <Route path="fpk" component={FpkTab} />
        <Route path="/" component={Init} >
            <IndexRoute component={Welcome}/>
            <Route path="history" component={Historys} />
            <Route path="signin" component={SignIn} />
            <Route path="register" component={Register} />
            <Route path="memberset" component={Memberset} />
            <Route path="forgetpassword" component={ForgetPassword} />
            <Route path="news/:Id" component={Information} />
            <Route path="search" component={SearchList} />
            <Route path="fpk/:Id" component={FpkDetail} />
            <Route path="inplay" component={Inplay} />
            <Route path="contact" component={Contact} />
            <Route path="search/:text" component={SearchList} />
            <Route path="category/:type" component={CategoryList} />
            <Route path="detail/:Id" component={Detail} />
            <Route path="term" component={Term} />
            <Route path="help" component={Help} />
            <Route path="about" component={About} />
            <Route path="tutorial" component={Tutorial} />
            <Route path="ranking" component={Ranking} />
            <Route path="ranking/:type" component={RankingList} />
            <Route path="rankingreward" component={RankingReward} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>

    </Router>
    , document.querySelector('#init')
)
