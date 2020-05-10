import React from 'react'

import {Container, Head, Titulo, BemVindo} from './style'



function Styled(){
  return(
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>
      <BemVindo cor="#00ff00" tamanho="20">
        Bem vindo ao sistema
      </BemVindo>
    </Container>
  )
}

export default Styled