import React, { useContext } from 'react';
import Context from './context';

function Meditations() {
  const [state, setState] = useContext(Context)

  return (
    <h1> MEDITATIONS SIDA</h1>
  )
}


export default Meditations;