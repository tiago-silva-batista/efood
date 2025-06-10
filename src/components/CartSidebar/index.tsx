import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../../store'
import { remove } from '../../store/reducers/cart'

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

import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import { useState } from 'react'
import ConfirmationScreen from '../OrderConfirmationModal'

type Props = {
  isVisible: boolean
  step: 'cart' | 'delivery' | 'payment' | 'confirmation'
  onChangeStep: (step: 'cart' | 'delivery' | 'payment' | 'confirmation') => void
  onClose: () => void
}

const CartSidebar = ({ isVisible, step, onChangeStep, onClose }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((acc, item) => acc + item.preco, 0)

  const [address, setAddress] = useState({
    rua: '',
    numero: '',
    cidade: '',
    cep: ''
  })

  useEffect(() => {
    if (items.length === 0) {
      onClose()
    }
  }, [items, onClose])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {isVisible && <Overlay onClick={handleOverlayClick} />}
      <Sidebar isVisible={isVisible}>
        {step === 'cart' && (
          <>
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
            <CheckoutButton onClick={() => onChangeStep('delivery')}>
              Continuar com a entrega
            </CheckoutButton>
          </>
        )}

        {step === 'delivery' && (
          <DeliveryForm
            onBack={() => onChangeStep('cart')}
            onContinue={() => onChangeStep('payment')}
            onSaveAddress={(dados) => setAddress(dados)}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            onBack={() => onChangeStep('delivery')}
            onConfirm={() => onChangeStep('confirmation')}
            total={total}
            address={address}
            cart={items.map((item) => ({
              id: Number(item.id),
              nome: item.nome,
              preco: item.preco,
              quantidade: 1
            }))}
          />
        )}
        {step === 'confirmation' && (
          <ConfirmationScreen
            cart={items.map((item) => ({
              id: Number(item.id),
              nome: item.nome,
              preco: item.preco,
              quantidade: 1
            }))}
            address={`${address.rua}, ${address.numero}, ${address.cidade}, ${address.cep}`}
            total={total}
            onClose={onClose}
          />
        )}
      </Sidebar>
    </>
  )
}

export default CartSidebar
