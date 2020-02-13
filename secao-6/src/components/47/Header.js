import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <div>
      Header Meu projeto
      <Link to='/about'>Ir para sobre</Link>
      <hr/>
    </div>
  )
}

export default Header