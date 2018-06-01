import React from 'react';
import './contact.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount(){
      window.scrollTo(0, 0); //畫面回到最上層
    }

    render() {

      return (
        <main className="contact">
        <div className="container content">
            <div className="row">
                <div className="col-md-12" style={{'margin':'50px 0 50px 0'}}>
                    <div className="caption">
                        <h4>Contact</h4>
                        <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>
                    </div>


                    <div className="contact_wrap">
                        <div className="contact_box">
                            <div className="col-md-4">
                                <div className="contact_content">
                                    <div className="form_row">
                                        <div className="form_group has_error">
                                            <label htmlFor="name">Name</label>
                                            <input id="name" type="text" className="input_mainpg" placeholder="your name"/>
                                        </div>
                                        <div className="form_group">
                                            <label htmlFor="tel_num">Phone</label>
                                            <input id="tel_num" type="tel" className="input_mainpg" placeholder="your phone"/>
                                        </div>
                                    <div className="form_group">
                                        <label htmlFor="email_addr">Mail</label>
                                        <input id="email_addr" type="email" className="input_mainpg" placeholder="your mail"/>
                                    </div>
                                    </div>
                                </div></div>
                            <div className="col-md-8">
                                <div className="contact_content">
                                    <div className="form_group">
                                        <textarea id="question_area" rows="10" cols="80" placeholder="your problem"></textarea>
                                        <div className="btngroup">
                                            <a href="javascript:void(0)" className="btndefault">sent</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </main>
        )
    }
}
