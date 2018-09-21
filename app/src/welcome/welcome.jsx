import React from 'react';
import './welcome.css';
import './welcomeNew.css';
import Slider from './components/Slider.jsx';
import NewsList from './components/Product/News/NewsList.jsx';
import LiveList from './components/Product/Lives/LiveList.jsx';
import ApplePen from './ApplePen.jsx';

let newArray =[];

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
          <div>

            <main>

              <div className="content">
                  <div className="container-fluid">
                      <div className="row">
                        <LiveList/>
                        <div className="clearfix"></div>
                        <ApplePen/>
                        <NewsList/>

                      </div>
                  </div>
              </div>

            </main>
          </div>
        )
    }
}
