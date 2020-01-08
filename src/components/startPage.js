import React from 'react';



function StartPage() {

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
      <div className="container2">
        <h4 className="body-h4">Varför meditera?</h4>
        <div className="background1">
        </div>
        <br></br>
        <p>Meditation är ett enkelt sätt att bli mer närvarande i vardagen.
        Det sänker stressnivån och hjälper oss att få perspektiv på våra problem
        som annars kan ta väldigt mycket energi
        Så hur gör man då? Vi hjälper dig!
        lorem Meditation är ett enkelt sätt att bli mer närvarande i vardagen.
        Det sänker stressnivån och hjälper oss att få perspektiv på våra problem
        som annars kan ta väldigt mycket energi
      Så hur gör man då?</p>
        <br>
        </br>
        <p>Att meditera handlar om att träna sitt sinne och låta tankeverksamheten vila en stund.
         Meditation gör också gott för kroppen genom att minska stress, öka din koncentration och bidra till bättre sömn.
         Men för en nybörjare kan det kännas svårt att veta hur man kommer igång.
         Men det finns olika meditationstekniker för att hamna i rätt sinnesstämning,
        för att bli närvarande och lära sig observera sina tankar och förstå sig själv bättre.
         </p>
        <div className="background2">
        </div>
        <br></br>
        <h4>Kan alla meditera?</h4>
        <p>– Ja, man behöver inte vara munk eller sluta se på tv.
        Kanske är det just den inre bilden vi har av vilka det är som mediterar som bidrar till att många inte testar.
        I stället kan vi tänka på mediterande förebilder som Apples grundare Steve Jobs och associera meditation till kreativitet och
         innovation.</p>
      </div>
    </React.Fragment>
  );
};


export default StartPage;