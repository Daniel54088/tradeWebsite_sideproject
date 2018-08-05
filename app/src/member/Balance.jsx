import React from 'react';
import { Table, Icon } from 'antd';
import './NewMember.css';


export default class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {


      return (
        // Balance
        <main>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="Basic-info">
                    <div className="Basic-item">
                      <h5>Real Name</h5>
                      <h3>YOOOO</h3>
                    </div>
                      <div className="Basic-item">
                        <h5>E-mail</h5>
                        <h3>yoo@gmail.com</h3>
                      </div>
                        <div className="Basic-item">
                          <h5>Cell Phone</h5>
                          <h3>1234-123-123</h3>
                        </div>
                      </div>
                </div>

                <div className="col-md-6">
                  <div className="bulletin">
                    <div className="bulletin-list">
                    <ul>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>
                      <li><h5>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h5></li>

                    </ul>
                    </div>
                  </div>
                </div>

                  <div className="col-md-12">
                    <div className="Basic-info">
                      <div className="Basic-item">
                        <h5>ETC</h5>
                        <h3><img src="./../images/next.png"/>1,000,000,000</h3>
                      </div>
                        <div className="Basic-item">
                          <h5>ETC</h5>
                          <h3><img src="./../images/next.png"/>1,000,000,000</h3>
                        </div>
                          <div className="Basic-item">
                            <h5>ETC</h5>
                            <h3><img src="./../images/next.png"/>1,000,000,000</h3>
                          </div>
                            <div className="Basic-item">
                              <h5>ETC</h5>
                              <h3><img src="./../images/next.png"/>1,000,000,000</h3>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
        </main>
        )
    }
}
