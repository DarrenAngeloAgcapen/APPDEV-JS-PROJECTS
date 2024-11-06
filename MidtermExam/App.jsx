import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Identification from './Identification.jsx'
//import FavoriteFood from './FavoriteFood.jsx'
import Counter from './Counter.jsx'
//import Function from './Function.jsx'
import Paragraph from './Paragraph.jsx'
import MyCart from './MyCart.jsx'


function App() {
  return (
    <>
      <Header/>
      <Identification/>
      {/** FavoriteFood */}
      <Counter />
      {/** Function */}
      <Paragraph />
      <MyCart/>
      <Footer/>
    </>
  )
}

export default App
