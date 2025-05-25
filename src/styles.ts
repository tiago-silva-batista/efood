import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  beige: '#FFEBD9',
  white: '#FFFFFF',
  lightBeige: '#FFF8F2',
  yellow: '#FFFF00',
  red: '#8A0808'
}

export const GlobalCss = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}

body {
background-color: ${colors.lightBeige};
color: ${colors.orange};
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
