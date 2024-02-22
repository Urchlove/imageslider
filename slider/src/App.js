import React from 'react'
import ani from './love/ani.jpg'
import ano from './love/ano.jpg'
import glo from './love/glo.jpg'
import gly from './love/gly.jpg'
import oky from './love/oky.jpg'
import ucc from './love/ucc.jpg'
import uch from './love/uch.jpg'
import uche from './love/uche.jpg'
import urch from './love/urch.jpg'
import ImageSlider from './ImageSlider.tsx'

const IMAGE = [ani,ano,glo,gly,oky,ucc,uch,uche,urch]

function App() {
  return (
    <div className='div1'>
  <ImageSlider imageUrls={IMAGE} />
  </div>
  )
}

export default App