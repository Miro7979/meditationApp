import React from "react";

const Footer = (props) => {


  return (
    <React.Fragment>
      <footer className="footer">

        <div className="container">
          <div className="row mb-0 info">

            <div className="col-lg-4">
              <p>Telefon: 040 123456</p>
            </div>

            <div className="col-lg-4">
              <p>Email: medi@mail.se</p>
            </div>

            <div className="col-lg-4">
              <p>Samarbetspartner Miro</p>
            </div>
          </div>
          <div className="row mt-0 ">
            <div className="col">
              <p>Meditationer AB &copy; 2019 Adress: Produktägarnasgata 100, 122 36 Småstad</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );

}

export default Footer;


