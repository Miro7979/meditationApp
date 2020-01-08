import React from "react";
import { Row, Col } from 'reactstrap';

const Footer = (props) => {


  return (
    <React.Fragment>

      <div className="footer">
        <div className="footer-content">
          <Row>
            <div className="footer-contents">
              <Col md={{ size: 6, offset: 3 }}>
                <div className="footer-section about">
                  <h2 className="logo-text">Meditation App</h2>
                  <p>
                    Många vill testa meditation, men ändå är det så svårt att börja!.
                    Vi hjälper dig med detta.
              </p>
                  <div className="contact">
                    <span><i className="fas fa-phone"></i> &nbsp; 010 123 123</span>
                    <span><i className="fas fa-envelope"></i> &nbsp; info@meditationapp.se</span>
                  </div>
                  <div className="socials">
                    <a href="https://sv-se.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/?hl=sv"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/?hl=sv&gl=SE"><i className="fab fa-youtube"></i></a>

                  </div>
                </div>
              </Col>
              <Col md={{ size: 6, offset: 3 }}>
                <div className="footer-section links">
                  <h4>Länkar</h4>
                  <br></br>
                  <ul>
                    <a href="bla"><li>Events</li></a>
                    <a href="bla"><li>Vår grupp</li></a>
                    <a href="bla"><li>Bloggar</li></a>
                    <a href="bla"><li>Användar vilkor</li></a>
                  </ul>
                </div>
              </Col>
            </div>
          </Row>
        </div>

        <div className="footer-bottom">
          &copy; meditationapp.se | Design av Miro
         </div>
      </div>

    </React.Fragment>
  );

}

export default Footer;


