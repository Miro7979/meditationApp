import React from 'react';
import { Row, Col } from 'reactstrap';


function AboutUS() {

  let heading = 'Om oss';
  let subHeading = 'Hej och välkommen!';

  return (
    <React.Fragment>
      <section className="aboutUsPageHeader">
        <div className="header-body">
          <div className="container">
            <h1 className="title">{heading}</h1>
            <div className="is-two-thirds column is-paddingless">
              <h2 className="subtitle is-4">{subHeading}</h2>
            </div>
          </div>
        </div>
      </section>
      <Row className="aboutUsText">
        <Col sm={{ size: 8, offset: 2 }}>
          <p>
            Vi vill hjälpa dig att skapa tid för återhämtning i vardagen, visa vägen in i meditationens värld och få berätta om vilket
             fantastiskt starkt verktyg det är för att få ordning på sitt liv,
             kunna hantera den där vardagliga stressen vi alla har och faktiskt få fler lugna, sköna och lyckliga stunder i livet.
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}


export default AboutUS;