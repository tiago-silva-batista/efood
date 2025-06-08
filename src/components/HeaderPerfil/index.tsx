import { HeaderBarPerfil, LinkCar, LogoImage, RestauranteLink } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  abrirCarrinho,
  mudarEtapa,
  fecharCarrinho
} from '../../store/reducers/cart'
import { RootState } from '../../store'
import CartSidebar from '../../components/CartSidebar'

import Container from '../Container'

import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isCartVisible = useSelector((state: RootState) => state.cart.isOpen)
  const step = useSelector((state: RootState) => state.cart.step)

  const quantidade = cartItems.length

  const dispatch = useDispatch()

  const handleClickCarrinho = () => {
    dispatch(mudarEtapa('cart')) // força ir para o carrinho
    dispatch(abrirCarrinho())
  }

  return (
    <>
      <HeaderBarPerfil>
        <Container>
          <div className="header-wrapper">
            <RestauranteLink to="/">Restaurantes</RestauranteLink>
            <LogoImage src={logo} alt="Logo do restaurante" />
            <LinkCar onClick={handleClickCarrinho}>
              <p>
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
      <CartSidebar
        isVisible={isCartVisible}
        step={step}
        onChangeStep={(newStep) => dispatch(mudarEtapa(newStep))}
        onClose={() => dispatch(fecharCarrinho())}
      />
    </>
  )
}

export default HeaderPerfil
