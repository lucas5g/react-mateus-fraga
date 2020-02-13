import React from 'react'
import { Link } from 'react-router-dom'

function Erro(){
    return (
        <div>
            <h2>Ops! Página não encontrada</h2>
            <h3>Você esta procurando por:</h3>
            <Link to='/'>Home</Link><br/>
            <Link to='/about'>Sobre</Link>
        </div>
    )
}

export default Erro

