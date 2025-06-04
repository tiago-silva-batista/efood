import { HeaderBarPerfil, LinkCar, LogoImage, RestauranteLink } from './styles'

import logo from '../../assets/images/logo.png'

import Container from '../Container'

const HeaderPerfil = () => {
  return (
    <HeaderBarPerfil>
      <Container>
        <div className="header-wrapper">
          <RestauranteLink to="/">Restaurantes</RestauranteLink>
          <LogoImage src={logo} alt="Logo do restaurante" />
          <LinkCar>0 produto(s) no carrinho</LinkCar>
        </div>
      </Container>
    </HeaderBarPerfil>
  )
}

export default HeaderPerfil
