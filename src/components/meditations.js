import React from 'react';
import MediPic1 from '../images/meditation1.jpg';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const MeditationCard = (props) => {

  let heading = 'Meditationer';
  let subHeading = `– Ofta lägger vi mycket energi på att få till världen utanför oss själva för att känna välbefinnande,
 när vi i stället borde koncentrera oss på att hitta friden inom oss själva.`;

  return (
    <React.Fragment>
      <section className="meditationPageHeader">
        <div className="header-body">
          <div className="container">
            <h1 className="title">{heading}</h1>
            <div className="is-two-thirds column is-paddingless">
              <h2 className="subtitle is-4">{subHeading}</h2>
            </div>
          </div>
        </div>
      </section>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <div className="meditationCard">
            <Card>
              <CardImg top width="20%" src={MediPic1} alt="Card image cap" />
              <CardBody>
                <CardTitle>Lugnet</CardTitle>
                <CardSubtitle> Slut ögonen och spänn alla muskler i kroppen under några sekunder, det ska fortfarande kännas bra </CardSubtitle>
                <Button>Prova meditationen</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MeditationCard;
