import React from 'react'

import Dice from './components/Dice'
import Country from './components/Country'
import Dictionary from './components/Dictionary'
import RandomQrCode from './components/RandomQrCode'

const App = () => {
  return (
    <div>
       <Country />
      <Dice />
     <Dictionary />
     <RandomQrCode />
    </div>
  )
}

export default App
