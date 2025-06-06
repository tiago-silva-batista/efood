import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../../store'
import { remove, fecharCarrinho } from '../../store/reducers/cart'

import {
  Sidebar,
  Overlay,
  CartItem,
  ProductImage,
  ProductInfo,
  RemoveButton,
  Total,
  CheckoutButton
} from './styles'

type Props = {
  isVisible: boolean
}

const CartSidebar = ({ isVisible }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fecharCarrinho())
    }
  }, [items, dispatch])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(fecharCarrinho())
    }
  }

  return (
    <>
      {isVisible && <Overlay onClick={handleOverlayClick} />}
      <Sidebar isVisible={isVisible}>
        {items.map((item) => (
          <CartItem key={item.id}>
            <ProductImage src={item.foto} alt={item.nome} />
            <ProductInfo>
              <h3>{item.nome}</h3>
              <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
            </ProductInfo>
            <RemoveButton onClick={() => dispatch(remove(item.id))} />
          </CartItem>
        ))}
        <Total>
          <span>Valor total</span>
          <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
        </Total>
        <CheckoutButton>Continuar com a entrega</CheckoutButton>
      </Sidebar>
    </>
  )
}

export default CartSidebar
