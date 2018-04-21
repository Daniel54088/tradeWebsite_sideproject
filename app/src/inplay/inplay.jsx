import React from 'react';



export default class Inplay extends React.Component {
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
        <main>

            <iframe src="http://esports.ggcarry.biz/esport.aspx?languagecode=1&theme=black">
            </iframe>

        </main>
        )
    }
}
