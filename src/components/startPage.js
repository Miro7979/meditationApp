import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'


function StartPage() {
  const [articles, setArticles] = useState([]);

  async function displayArticles() {

    await axios.get('/api/articles')
      .then(res => {
        setArticles(res.data)
      })
  }

  useEffect(() => {
    displayArticles()
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  let heading = 'Välkommen till Meditations Appen';
  let subHeading = 'Meditation är ett enkelt sätt att bli mer närvarande i vardagen. Så hur gör man då? Vi hjälper dig!';
  return (
    <React.Fragment>
      <section className="startHeader">
        <div className="header-body">
          <div className="container">
            <h1 className="title">{heading}</h1>
            <div className="is-two-thirds column is-paddingless">
              <h2 className="subtitle is-4">{subHeading}</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {(articles.map(articles => {
          return (
            <div key={uuid()}>
              <h4 className="body-h4">Varför meditera?</h4>
              <div className="background1">
              </div>
              <br></br>
              <p>{articles.startPageArticle1}</p>
              <br>
              </br>
              <p>{articles.startPageArticle2}</p>
              <div className="background2">
              </div>
              <br></br>
              <h4>Kan alla meditera?</h4>
              <p>{articles.startPageArticle3}</p>
            </div>
          )
        }))}
      </div>
    </React.Fragment>
  );
};


export default StartPage;