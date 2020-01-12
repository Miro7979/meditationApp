import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'


function Help() {
  const [articles, setArticles] = useState([]);

  async function displayArticles() {

    await axios.get('/api/articles')
      .then(res => {
        setArticles(res.data)
      })
  }

  useEffect(() => {
    displayArticles()
    console.log(articles.startPageArticle1)
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
  let heading = 'Tips och råd';
  let subHeading = 'Här kan du få tips och råd om hur du kan på bästa sätt meditera och komma igång';

  return (
    <React.Fragment>
      <section className="helpPageHeader">
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
              <h4 className="body-h4 mt-4">Effekterna av meditation</h4>
              <div className="helpPageBackground1">
              </div>
              <br></br>
              <p> {articles.helpPageArticle1} </p>
              <br>
              </br>
              <p> {articles.helpPageArticle2} </p>
              <div className="helpPageBackground2">
              </div>
              <br></br>
              <h4>Meditation och smärtlindring</h4>
              <p> {articles.helpPageArticle3}</p>
              <div className="helpPageBackground3">
              </div>
              <br></br>
              <h4>Några enkla steg för att komma igång:</h4>
              <h6>1. Ha en avsikt</h6>
              <p> {articles.helpPageStep1} </p>
              <br></br>
              <h6>2. Fokusera på dina andetag</h6>
              <p> {articles.helpPageStep2} </p>
              <br></br>
              <h6>3. Hur många minuter</h6>
              <p> {articles.helpPageStep3} </p>
              <br></br>
              <h6>4. Prova i minst 30 dagar</h6>
              <p> {articles.helpPageStep4} </p>
              <br></br>
              <h6>5. Ställ in ett dagligt schema</h6>
              <p> {articles.helpPageStep5} </p>
              <br></br>
              <p>Mera instruktioner hittar du i våra meditationer.</p>
            </div>
          )
        }))}
      </div>

    </React.Fragment>
  )
}


export default Help;