import React, { useContext } from 'react';
import Context from './context';

function Help() {
  const [state, setState] = useContext(Context)

  return (
    <h1> TIPS OCH RÅD SIDA</h1>
  )
}


export default Help;