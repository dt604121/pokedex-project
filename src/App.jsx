import './App.css'
import RandomPokemon from './components/RandomPokemon';

function App() {
  return (
    <>
      <div>
        <h1>Pokedex</h1>
        <h3>Random Pokemon</h3>
        <RandomPokemon></RandomPokemon>
        <h3>Search</h3>
        {/* <SearchPokemon></SearchPokemon> */}
      </div>
    </>
  )
}

export default App
