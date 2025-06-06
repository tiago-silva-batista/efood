import { HeaderBarPerfil, LinkCar, LogoImage, RestauranteLink } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { abrirCarrinho } from '../../store/reducers/cart'
import { RootState } from '../../store'

import Container from '../Container'

import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const quantidade = cartItems.length

  const dispatch = useDispatch()

  const handleClickCarrinho = () => {
    dispatch(abrirCarrinho())
  }

  return (
    <HeaderBarPerfil>
      <Container>
        <div className="header-wrapper">
          <RestauranteLink to="/">Restaurantes</RestauranteLink>
          <LogoImage src={logo} alt="Logo do restaurante" />
          <LinkCar>
            <p onClick={handleClickCarrinho}>
              {quantidade === 0
                ? 'Nenhum item no carrinho'
                : `${quantidade} produto${
                    quantidade > 1 ? 's' : ''
                  } no carrinho`}
            </p>
          </LinkCar>
        </div>
      </Container>
    </HeaderBarPerfil>
  )
}

export default HeaderPerfil
