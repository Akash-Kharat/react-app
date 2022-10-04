import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGTP3,Header} from './container';
import {CTA, Brand, Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <div className='APP'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGTP3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App