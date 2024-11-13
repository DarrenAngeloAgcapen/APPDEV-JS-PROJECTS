import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './Shop.jsx'

function App() {
  let items = [
    {id: 1, name: "Grapes", price: 120},
    {id: 2, name: "Oranges", price: 20},
    {id: 3, name: "Kiwis", price: 15},
    {id: 3, name: "Bananas", price: 10},
    {id: 3, name: "Cucumbers", price: 10}
  ]
  return (
    <>
      <Shop items = {items}/>
    </>
  )
}

export default App
