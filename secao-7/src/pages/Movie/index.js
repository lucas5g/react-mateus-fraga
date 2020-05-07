import React, {useState, useEffect} from 'react'

import {Container} from './style'



const Movie = (props) => {
  const [movie, setMovie] = useState('')
  const {id} = props.match.params

  useEffect(() => {
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
    fetch(url)
      .then((res) => res.json())  
      .then((data) => {
        setMovie(data)
      })
  })
  return(
    <Container>
      <h1>{movie.nome}</h1>
      <img src={movie.foto} alt={movie.nome}/>
      {movie &&
        <h3>Sinopse</h3>
      }
     
      {movie.sinopse}
    </Container>
  )
}

export default Movie