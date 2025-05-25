import styled from 'styled-components'
import HeaderBackImage from '../../assets/images/fundo-header.png'
import { colors } from '../../styles'

export const HeaderBarPerfil = styled.header`
  background-image: url(${HeaderBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 56px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }
`

export const LogoImagePerfil = styled.img`
  max-width: 125px;
  display: block;
  height: auto;
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.orange};
  text-decoration: none;
`

export const RestauranteLink = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.orange};
  margin: 0;
`

export const ImageBottom = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`

export const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`

export const TitleCategory = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const TitleLearnMore = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
`
