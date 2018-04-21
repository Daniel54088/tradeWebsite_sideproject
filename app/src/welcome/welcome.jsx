import React from 'react';
import './welcome.css';
import Slider from './components/Slider.jsx';
import NewsList from './components/Product/News/NewsList.jsx';
import LiveList from './components/Product/Lives/LiveList.jsx';
import Bulletin from '../components/Bulletin.jsx';

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
            <Slider />
            <main>
            <Bulletin/>
              <div className="content">
                  <div className="container-fluid">
                      <div className="row">
                        <NewsList/>
                        <LiveList/>
                      </div>
                  </div>
              </div>

            </main>
          </div>
        )
    }
}
