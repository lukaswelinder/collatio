import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Row, Col, CardPanel, Chip, CardTitle, Card, Tabs, Tab } from 'react-materialize'
import SearchBar from '../containers/SearchBar.jsx'

import Tech from './about/Tech.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  hoverPopUp(content){
    return(
      <div>
           {content}
      </div>
    )
  }
  aboutUs(){
    return (
      <div style={{fontSize: '24px', minHeight: '50vh'}} className="valign-wrapper">
        <Row className="center-align valign">

          <Col m={4} s={10} className="offset-s1">

            <img style={{padding: '10% 10% 10% 10%', marginBottom: '-20px'}} className="responsive-img circle" src="https://avatars2.githubusercontent.com/u/2400070?v=3&s=460"/>

            <div>Ben Chen</div>
            <span>

              <a style={{fontSize: '16px'}} href="https://github.com/byc219" target="_blank">
                GitHub
              </a>
              <a style={{fontSize: '16px', marginLeft: '15px'}} href="https://www.linkedin.com/in/benychen" target="_blank">
                LinkedIn
              </a>


            </span>
          </Col>

          <Col m={4} s={10} className="offset-s1">


            <img style={{padding: '10% 10% 10% 10%', marginBottom: '-20px'}} className="responsive-img circle" src="https://avatars2.githubusercontent.com/u/16439986?v=3&s=400"/>

            <div>Rico Chen</div>
            <span>

              <a style={{fontSize: '16px'}} href="https://github.com/ricochen" target="_blank">
                GitHub
              </a>
              <a style={{fontSize: '16px', marginLeft: '15px'}} href="https://www.linkedin.com/in/ricochenx" target="_blank">
                LinkedIn
              </a>


            </span>
          </Col>

          <Col m={4} s={10} className="offset-s1">

            <img style={{padding: '10% 10% 10% 10%', marginBottom: '-20px'}} className="responsive-img circle" src="https://avatars1.githubusercontent.com/u/15223543?v=3&s=400"/>

            <div>Lukas Welinder</div>
            <span>

              <a style={{fontSize: '16px'}} href="https://github.com/lukaswelinder" target="_blank">
                GitHub
              </a>
              <a style={{fontSize: '16px', marginLeft: '15px'}} href="https://www.linkedin.com/in/lukaswelinder" target="_blank">
                LinkedIn
              </a>


            </span>
          </Col>

        </Row>
      </div>
    )
  }
  aboutColl(){
    return (
      <div style={{fontSize: '17px'}} className="container center-align blue-grey-text text-darken-1">
        <p>
          Ever wonder how people felt about a particular topic? <br />The general sentiment or tone towards it in conversations around the web?
        </p>

        <p>
          Qualitative data, such as knowing the positive and negative view of a topic can be invaluable.
          By leveraging social media data, Basselope seeks to aggregate, analyze, and visualize the sentiment of conversation around any given term.
          Go ahead and give it a try:
        </p>

        <div className="col s10 offset-s1 m6 offset-m3">
          <SearchBar />
        </div>

      </div>


    )
  }
// <div className="flow-text blue-grey-text text-darken-1">React</div>
  aboutTech(){
    return (
      <div className="center-align">
        <Row>
          <div style={{fontSize: '17px'}} className="container blue-grey-text text-darken-1">
            <p>
              Basselope was developed with performance in mind, leveraging the async & parallel capabilities of Node.js and Express on the back-end.
            </p>
            <p>
              The front-end utilizes React, Redux, and D3.js to efficiently manage the view, data-flow, and visualization of the data returned by the server.
            </p>
            <p>
              Our data is aggregated from a range of sources including Twitter, WikiNews, and Reddit.
            </p>
          </div>
        </Row>
        <Row>
          <Col s={12}>
            <Col s={1} className="offset-s4">

                <img className="responsive-img" src="/assets/nodejs_logo.svg" />

            </Col>
            <Col s={1}>

              <img className="responsive-img" src="/assets/react_logo.svg" />

            </Col>
            <Col s={1}>

              <img className="responsive-img" src="/assets/redux_logo.svg" />

            </Col>
            <Col s={1}>

              <img className="responsive-img" src="/assets/d3_logo.svg" />

            </Col>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Col s={1} className="offset-s4">

              <img className="responsive-img" src="/assets/twitter_logo.svg" />

            </Col>

            <Col s={2}>
              <Col s={10} className="offset-s1">
                <img className="responsive-img" src="/assets/wikinews_logo.svg" />
              </Col>
            </Col>

            <Col s={1}>

              <img className="responsive-img" src="/assets/reddit_logo.svg" />

            </Col>
          </Col>
        </Row>
      </div>
    )
  }
  tabBuilder() {
    return (
      <div className="container">
        <Tabs>
          <Tab className='blue-grey lighten-2'
          title={(<div className="flow-text blue-grey-text text-darken-2">BASSELOPE</div>)} active>
            {this.hoverPopUp(this.aboutColl())}
          </Tab>
          <Tab className='blue-grey lighten-2 blue-grey-text text-darken-2'
               title={(<div className="flow-text blue-grey-text text-darken-2">THE TEAM</div>)}>
            {this.hoverPopUp(this.aboutUs())}
          </Tab>
          <Tab className='blue-grey lighten-2 blue-grey-text text-darken-2'
               title={(<div className="flow-text blue-grey-text text-darken-2">THE TECH</div>)}>
            {this.hoverPopUp(this.aboutTech())}
          </Tab>
        </Tabs>
      </div>
    );
  }

  render() {

    return (


          <div style={{minHeight: '100vh'}}>
            <Row style={{minHeight: '100%'}}>
              {this.tabBuilder()}
            </Row>
          </div>



    );
  }
}

const mapStateToProps = (state) => {
  return {  };
}

export default connect(mapStateToProps)(Home)