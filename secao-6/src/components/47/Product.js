import React, { useState, useEffect } from 'react'

function Product(props){
  const [id, setId] = useState('')
  const paramsId = props.match.params.id
  useEffect(() => {
    setId(paramsId)
    console.log(props.match)
  }, [paramsId])


  return (
    <div>
      <h1>Produto {id}</h1>
    </div>
  )
}

export default Product