import React from 'react';


function Help() {
  let heading = 'Tips och råd';
  let subHeading = 'Här kan du få tips och råd om du kan på bästa sätt meditera och komma igång';

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
      <div className="container2">
        <h4 className="body-h4">Varför meditera?</h4>
        <div className="helpPageBackground1">
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
        <div className="helpPageBackground2">
        </div>
        <br></br>
        <h4>Kan alla meditera?</h4>
        <p>– Ja, man behöver inte vara munk eller sluta se på tv.
        Kanske är det just den inre bilden vi har av vilka det är som mediterar som bidrar till att många inte testar.
        I stället kan vi tänka på mediterande förebilder som Apples grundare Steve Jobs och associera meditation till kreativitet och
       innovation.</p>
        <div className="helpPageBackground3">
        </div>
        <br></br>
        <h4>Några enkla steg för att komma igång:</h4>
        <h6>1. Ha en avsikt</h6>
        <p>
          Varför vill du meditera? Är det för att du vill bli mindre stressad, få perspektiv på dina problem,
        öka din fokuseringsförmåga eller helt enkelt bara bli mer mindful i livet? Vad din avsikt än är, så är det viktigt att ha en.</p>
        <br></br>
        <h6>2. Fokusera på dina andetag</h6>
        <p>
          Det finns flera olika typer av meditation som man kan göra.
          Men börja gärna med den som bara fokuserar på dina andetag
        </p>
        <br></br>
        <h6>3. Hur många minuter</h6>
        <p>
          Även om 25 minuters meditation, två gånger om dagen, ger väldigt bra effekt – så är detta alldeles för mycket för de flesta nybörjare.
          Är det första gången du mediterar? Börja med 3-5 minuter. Öka gradvis med veckorna.
        </p>
        <br></br>
        <h6>4. Prova i minst 30 dagar</h6>
        <p>
          Ge dig själv en prövotid.
           För att märka av effekten krävs det några dagar av meditation, så ge det en ärlig chans under en månads tid.
           Märker du sen att det inte är något för dig så är det bara att sluta!
          Men då har du i alla fall gett det en ärlig chans.
          30 dagar klarar du.
           Heja dig!
        </p>
        <br></br>
        <h6>5. Ställ in ett dagligt schema</h6>
        <p>
          För att inte ”glömma bort” meditationen eller prioritera bort den i stressen är det bra om du redan nu
          väljer en viss tid på dagen där du alltid gör meditation.
        </p>
        <br></br>
        <p>Mera instruktioner hittar du i våra meditationer.</p>
      </div>

    </React.Fragment>
  )
}


export default Help;