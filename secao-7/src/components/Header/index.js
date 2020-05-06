import React from 'react'
import {Link} from 'react-router-dom'

import {Container} from './style'

const Header = () => {
  return (
    <Container>
      <Link to='/'>Filmaria</Link>

    </Container>
  )
}

export default Header