import './App.css';

import { useState, useEffect } from 'react';

import api from './services/api'

import imgDesktop from './assets/pattern-divider-desktop.svg'
import iconDice from './assets/icon-dice.svg'

function App() {

  const [ advices, setAdvices ] = useState({})

  useEffect(() => {
    api
    .get("advice")
    .then(res => setAdvices(res.data.slip))
    .catch((err) => {
      console.log("Ops, something goes wrong!")
    })
  }, [])

  function refresh(){
    window.location.reload()
  }

  return (
    <div className="App">
      <div className='boxAdvice'>

        <h4> ADVICE # {advices?.id} </h4>

        <p> "{advices?.advice}" </p>

        <img src={imgDesktop} alt='Img Desktop' />

        <div className='diceBtn' onClick={refresh}>
          <img src={iconDice} alt='Icon Dice' />
        </div>

      </div>
    </div>
  );
}

export default App;
