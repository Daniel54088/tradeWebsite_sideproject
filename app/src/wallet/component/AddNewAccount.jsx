import React from 'react';

export default class AddNewAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

      return (
        <div className="modal fade" id="AddNewAccountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  新增其他帳戶內容未做
              </div>

            </div>
          </div>
        </div>
        )
    }
}
