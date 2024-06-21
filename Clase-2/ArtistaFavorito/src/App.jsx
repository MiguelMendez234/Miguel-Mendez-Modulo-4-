import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Artista favorito</h1>
    <div className='contenedor'>
      <h2>Cristiano Ronaldo</h2>
      <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" alt="Foto artista" />
      <p>
        Cristiano Ronaldo dos Santos Aveiro, es un futbolista portugues juega como extremo izquierdo o delantero, Nacio el 5 de febrero 
        de 1985 en una familia muy humilde de portugal. Durante su carrera deportiva ha pasado por equipos como el sporting de portugal,
        el Manchester United, el Real Madrid y el Al-Nassar F.C el cual es su actual equipo. Cristiano ronaldo es considerado uno de los 
        mejores juagadores de futbol del mundo y uno de los jugadores de futbol mas completos.
      </p>
    </div>
    </>
  )
}

export default App
