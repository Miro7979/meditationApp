
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'

import ReactPlayer from 'react-player';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
const MeditationCard = (props) => {
  const [meditations, setMeditations] = useState([]);

  async function displayMeditations() {

    await axios.get('/api/meditations')
      .then(res => {
        setMeditations(res.data)
      })

  }

  useEffect(() => {
    displayMeditations()
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])


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
          {(meditations.map(meditations => {
            return (
              <div className="meditationCard" key={uuid()}>
                <Card>
                  <CardImg top width="100%" src={require("../images/" + meditations.image)} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{meditations.name}</CardTitle>
                    <CardSubtitle> {meditations.text} </CardSubtitle>


                    <div className="player-wrapper">
                      <ReactPlayer className="react-player"
                        url={meditations.video} controls={true}
                        width="100%"
                        height="100%"
                      />
                    </div>

                  </CardBody>
                </Card>
                <div>







                </div>
              </div>
            )
          }))}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MeditationCard;
