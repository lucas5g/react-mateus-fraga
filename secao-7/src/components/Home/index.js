import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {Container} from './style'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = ()  => {
    const url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
        //console.log(data)
      })
  }
  return (
    <Container>
      {movies.map( r =>
        <article key={r.id}>
          <strong>{r.nome}</strong>
          <img src={r.foto} alt={r.name}/>
          <Link to={`/${r.id}`}>Acessar</Link>
        </article>  
      )}
    </Container>
  )
}

export default Home