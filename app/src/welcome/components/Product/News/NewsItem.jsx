import React from 'react';
import { Link, IndexLink } from 'react-router';



export default class NewsItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


      return (
        <div className="news_1 col-md-6">
            <div className="news_img_left"><img src={this.props.image}/></div>
            <div className="news_text_right">
                <div className="newsRight_title"><a href=""><h3>{this.props.title}</h3></a></div>
                <h4>2018-05-02 12:21:24</h4>
                <div className="pBOX"><p>ConcertVR today competed its ICO pre-sale, having reached the 1,200 Ether (Ethereum’s native currency) hard cap in less than four days. 1,200 Ether equates to about £325,000. The main round of the token sale will commence on April 15 and the hard cap for that is 60,000 ETH (roughly £16.25 million, at time of writing).…</p></div>
                <div className="news_eye clearfix"><i className="fas fa-eye  fa-1x"></i>
                    <p>1231</p>
                </div>
                <div>
                  <a className="readMore">Read more</a>
                </div>
            </div>

        </div>

        )
    }
}
