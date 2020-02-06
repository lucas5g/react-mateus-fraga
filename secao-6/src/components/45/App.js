import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [ article, setArticle ] = useState([])

  useEffect(() => {
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
      .then((response) => response.json())
      .then((response) => {
        setArticle(response)
        console.log(response)
      })
  }, [])
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {article.map( r => 
        <article key={r.id}> 
          <strong>{r.titulo}</strong>
          <img src={r.capa} alt={r.titulo}/>
          <p>{r.subtitulo}</p>
          <a href="#">Acessar</a>
        </article>
      )}
     
    </div>
  );
}

export default App;
