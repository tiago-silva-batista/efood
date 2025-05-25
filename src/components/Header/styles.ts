import styled from 'styled-components'
import HeaderBackImage from '../../assets/images/fundo-header.png'

export const HeaderBar = styled.header`
  background-image: url(${HeaderBackImage});
  text-align: center;
  background-size: cover;
  background-position: center;
  height: 384px;
  display: block;
  padding-top: 40px;
  margin-bottom: 80px;
  }
`

export const LogoImage = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  padding-bottom: 100px;
`

export const HeaderTitle = styled.h2`
  padding-top: 56px;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 40px;
`
