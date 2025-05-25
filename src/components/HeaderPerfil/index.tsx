import {
  HeaderBarPerfil,
  ImageBottom,
  LinkCar,
  LogoImagePerfil,
  RestauranteLink,
  TitleCategory,
  TitleContainer,
  TitleLearnMore,
  BannerContainer
} from './styles'
import logo from '../../assets/images/logo.png'
import capa from '../../assets/images/imagem-de-fundo.png'
import { Container } from '../../styles'

const HeaderPerfil = () => {
  return (
    <div>
      <HeaderBarPerfil>
        <Container>
          <div className="header-wrapper">
            <RestauranteLink>Restaurantes</RestauranteLink>
            <LogoImagePerfil src={logo} alt="Logo do restaurante" />
            <LinkCar>0 produto(s) no carrinho</LinkCar>
          </div>
        </Container>
      </HeaderBarPerfil>
      <BannerContainer>
        <ImageBottom src={capa} alt="Capa de fundo banner" />
        <Container>
          <TitleContainer>
            <TitleCategory>Italiana</TitleCategory>
            <TitleLearnMore>La Dolce Vita Trattoria</TitleLearnMore>
          </TitleContainer>
        </Container>
      </BannerContainer>
    </div>
  )
}

export default HeaderPerfil
