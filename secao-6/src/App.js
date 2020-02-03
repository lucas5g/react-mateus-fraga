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
  })
  return (
    <div className="container">
      {article.map( r => 
        <article> 
          <strong>{r.titulo}</strong>
          <img src={r.capa}/>
          <p>{r.subtitulo}</p>
          <a href="#">Acessar</a>
        </article>
      )}
     
    </div>
  );
}

export default App;
