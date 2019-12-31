import React, { useContext } from 'react';
import Context from './context';

function StartPage() {
  const [state, setState] = useContext(Context)

  return (
    <h1> Start SIDA</h1>
  )
}


export default StartPage;