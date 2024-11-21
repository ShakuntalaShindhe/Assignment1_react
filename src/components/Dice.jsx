import React, { useEffect, useState } from 'react'

import './Dice.css';

const Dice = () => {
  const[num,setNum]=useState(1);

  useEffect(()=>{
    console.log(`You  ${num} get Number while rolling a dice `)
  },[num])
 const rollDice=()=>{
    const newNum=Math.floor(Math.random()*6)+1;
    setNum(newNum)
 
 }
  return (
    <div className='container'>
        <div className='cards'>
      <h4 className='heading'>Roll a Dice</h4>
      <div className='card'>{num}</div>
      <button onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  )
}

export default Dice
