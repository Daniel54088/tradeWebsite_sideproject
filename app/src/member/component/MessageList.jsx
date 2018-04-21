import React from 'react';


export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

      return (
        <div className="message_list">
          <div className="message_item">
            <a href="#">
              <p>
                <span className="tag">活动</span> 【別問！來撿錢就對了！10%紅利金幣歡樂送！】
              </p>
            </a>
          </div>
        </div>
        )
    }
}
