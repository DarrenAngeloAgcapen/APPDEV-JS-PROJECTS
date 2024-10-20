import React, { useState } from 'react'
import Home from './Home'
import RegionSelect from './RegionSelect'
import './App.css'
import Footer from './Footer'

const App = () => {
  const [view, setView] = useState('home');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  }

  return (
    <>
    <div className="app">
      <header>
        <h1>My PokeDex</h1>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('region')}>Select by Region</button>
      </header>

      {view === 'home' && <Home onPokemonSelect={handlePokemonSelect} />}
      {view === 'region' && <RegionSelect onPokemonSelect={handlePokemonSelect} />}
    </div>
    <Footer />
    </>
  )
}

export default App;
