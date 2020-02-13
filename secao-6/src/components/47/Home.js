import React from 'react'
import { Link } from 'react-router-dom'

function Home(){
  return(
    <div>
      <h2>Bem-vindo a página Home...</h2>
      <Link to='/about'>Ir para Sobre</Link>

    </div>

  )    
}

export default Home