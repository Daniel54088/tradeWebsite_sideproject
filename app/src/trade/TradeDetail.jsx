import React from 'react';


export default class TradeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {

      return (
        <main>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 fpkdetail_1 content2">
                            <div className="fpkdetail_1_top top_btn">
                                <div className="fpkdetail_1_top_left">
                                    <a href="fpk_index.html" className="btndefault"><i className="fas fa-angle-double-left"></i>回到趣味竞猜大厅</a>
                                </div>
                                <div className="fpkdetail_1_top_right">
                                    <a href="#" className="btndefault">竞猜历史</a>
                                </div>
                            </div>
                            <div className="fpkdetail_1_top">
                                <div className="fpkdetail_1_top_left">
                                    <h3>(LOL) 12/23 贾克虎、虎神 15:00之后新开打的一局击杀数</h3>
                                </div>
                                <div className="fpkdetail_1_top_right">
                                    <h5>開賽時間</h5>
                                    <p>2017-12-22 11:00
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <div className="fpkdetail_2_content">
                                <div className="fpkdetail_1_pool">
                                    <div className="fpkdetail_1_poolcircle"><i className="fa fa-info-circle fa-2x"></i></div>
                                    <h2>奖金总彩池</h2>
                                    <hr/>
                                    <div className="fpk_silver_gold">
                                        <ul>

                                            <li className="money_right">
                                                <h5>200,000</h5></li>
                                        </ul>
                                        <ul>

                                            <li className="money_right">
                                                <h5>10,240,000</h5></li>
                                        </ul>
                                    </div>
                                    <p><i className="far fa-clock fa-1x"></i>3 天 13 小时 後封盤</p>
                                </div>
                                <div className="fpkdetail_1_desc">
                                    <h2><i className="fas fa-trophy fa-2x"></i>赛局说明</h2>
                                    <hr/>
                                    <h4>彩池分配说明</h4>
                                    <p>
                                        <b>本题总奖金在扣除手续费后，依照赢家们的下注比例来分配总彩金，</b>详细游戏教学请点击进入网页底部 "游戏教学"查看"趣味竞猜部分</p>
                                    <div className="fpk1_rightbtn">
                                        <a href="#" className="btndefault">趣味竞猜攻略</a></div>
                                </div>
                            </div>
                            <div className="fpk_pool">
                                <h1><i className="fas fa-bolt"></i>彩池<i className="fas fa-bolt"></i></h1><a href="">
                                <div className="fpkdetail_3_content fpk_gamehigh">
                                    <div className="fpkdetail_1_poolbet">
                                        <div className="fpk_silver_gold">
                                            <ul className="gold_right">
                                                <li className="gold_left"></li>
                                                <li className="money_right">
                                                    <h5>200,000</h5></li>
                                            </ul>
                                            <ul className="sivler_right">
                                                <li className="gold_left"></li>
                                                <li className="money_right">
                                                    <h5>10,240,000</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="fpkdetail_1_pooltext">
                                        <h3>A：YG拿下第一局胜利首杀小龙</h3></div>
                                </div></a>

                                <div className="fpkdetail_4_money">
                                    <div className="fpkdetail_1_bet">
                                        <div className="fpk1_rightselect">
                                            <a href=""><h3 className="fpk1_rightgold fpk_bethigh">金币投注</h3></a>
                                            <a href=""><h3 className="fpk1_rightsilver ">银币投注</h3></a>
                                        </div>
                                    </div>
                                    <div className="fpkdetail_1_money">
                                        <div className="fpk1_rightbtn">
                                            <a href="#" className="btndefault">20</a>
                                            <a href="#" className="btndefault">50</a>
                                            <a href="#" className="btndefault">100</a>
                                            <a href="#" className="btndefault">200</a>
                                            <a href="#" className="btndefault">500</a>
                                        </div>
                                    </div>
                                    <div className="fpkdetail_1_btn">
                                        <div className="form_group has_error">
                                            <input type="text" className="input_mainpg" name="loginID" placeholder="请输入数字"/>
                                        </div>
                                    </div>
                                    <div className="fpk_finalbet">
                                        <hr/>
                                        <h4><i className="fas fa-angle-left"></i>下注金额<i className="fas fa-angle-right"></i></h4>
                                        <h1>1,200,100,99</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="fpk1_finalbtn">
                                <a href="#" className="btndefault">确认投注</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}
