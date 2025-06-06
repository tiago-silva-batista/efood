import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HeaderBackImage from '../../assets/images/fundo-header.png'
import { colors } from '../../styles'

export const HeaderBarPerfil = styled.header`
  width: 100%;
  background-image: url(${HeaderBackImage});
  padding: 56px 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .header-wrapper {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
  }
`

export const LogoImage = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  margin: 0 auto;
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.orange};
  text-decoration: none;
  cursor: pointer;
`

export const RestauranteLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.orange};
  text-decoration: none;
  cursor: pointer;
`
