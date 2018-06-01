import React from 'react';
import './single.css';



export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.totop = this.totop.bind(this);
    }

    totop(){ //回到最上層
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
      return (
        <main className="about">
            <div className="container content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1" style={{marginTop:'50px'}}>
                        <div className="caption">

                            <h4>About</h4>
                            <p>Vladimir Putin is due to be sworn in for a fourth term as president of Russia on Monday after winning the last election in March.He has been in power for 18 years, whether as president or prime minister, and opponents have likened his tenure to the reign of a tsar, or emperor.
                                <br/>
                                <br/> Riot police confronted protesters against his rule in Moscow and other Russian cities on Saturday.
                            </p>
                        </div>
                        <div className="col-md-10 col-md-offset-1 profession" style={{"marginTop": "50px"}}>
                            <h4>Profession</h4>
                        </div>
                        <div className="col-md-5 col-md-offset-1 profession">
                            <img  src={require('../images/business-3271744_1920.jpg')}/>
                            <h4>10 years operation team</h4>
                            <p>The parent group's territory spans Asia and Europe, and it has accumulated 10 years of online game operation background. With abundant financial strength and complete technical equipment, you will be able to expand your career.</p>
                        </div>
                        <div className="col-md-5 profession">
                            <img src={require('../images/business-3271744_1920.jpg')}/>
                            <h4>24 hours online service</h4>
                            <p>24 hours processing members related to the issue, so that our proud customer service team, friendly and professional, to solve the players for the site, the game's incurable diseases, so that every player feel at home!</p>
                        </div>
                        <div className="col-md-10 col-md-offset-1 profession" style={{"marginTop": "50px"}}>
                            <img src={require('../images/winter-landscape-2571788_1920.jpg')}/>
                            <h4>Professional staff</h4>
                            <p>Independent support for e-sports game quiz, and extensive pre-game analysis of elite players in each game, so that you bet more confident.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </main>

        )
    }
}
