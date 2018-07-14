import React from 'react';
import './news.css';

export default class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type:location.pathname.slice(1,location.pathname.indexOf('/',1)), //擷取domain的字串,找到現在是哪一個類別

        }

    }



    render() {

      return (
        <main>
            <div> news content</div>
        </main>

        )
    }
}
