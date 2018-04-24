import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router';

/*结尾组件*/
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer_title">
                        <img src="images/footer/footer_logo.svg" alt=""/>
                    </div>        

                    <div className="footer_content">
                        <a href="about.html">
                            <p>About</p>
                        </a>
                        <a href="help.html">
                            <p>Help</p>
                        </a>
                        <a href="term.html">
                            <p>Rule</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}
