import {createGlobalStyle} from 'styled-components'
//import styled from 'styled-components'


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ddd;
  }

`
