import React, { useContext } from 'react';
import Context from './context';
import StartPageBackground from './startPageBackground';

function StartPage() {
  const [state, setState] = useContext(Context)

  return (
    <React.Fragment>
      < StartPageBackground />
      <h1> Start SIDA</h1>
    </React.Fragment>
  );
};


export default StartPage;