import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Top from './components/top'
import Mid from './components/mid'
import Mid_two from './components/mid_two'
import Mid_three from './components/mid_three'
import Mid_four from './components/mid_four'
import Mid_five from './components/mid_five'
import Bottom from './components/bottom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top />
    <Mid/>
    <Mid_two/>
    <Mid_three/>
    <Mid_four/>
    <Mid_five/>
    <Bottom/>
  </StrictMode>,
)
