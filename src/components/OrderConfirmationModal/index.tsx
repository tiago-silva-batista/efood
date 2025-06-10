import styled from 'styled-components'

import {
  Modal,
  Overlay,
  CloseButton,
  Title,
  Text,
  ConfirmButton
} from './styles'

type Props = {
  cart: {
    id: number
    nome: string
    preco: number
    quantidade: number
  }[]
  total: number
  address?: string
  onClose: () => void
}

const ConfirmationScreen = ({ cart, address, total, onClose }: Props) => {
  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Confirmação do Pedido</Title>
        <Text>Confira as informações do pedido antes de finalizar.</Text>

        <Text>Resumo do Pedido:</Text>
        {cart.map(
          (item: {
            id: number
            nome: string
            quantidade: number
            preco: number
          }) => (
            <Text key={item.id}>
              {item.nome} - {item.quantidade}x - R${' '}
              {(item.preco * item.quantidade).toFixed(2)}
            </Text>
          )
        )}

        <Text>
          Endereço de Entrega:{' '}
          {address && address.trim().length > 0
            ? address
            : 'Nenhum endereço informado.'}
        </Text>

        <Text>Total: R$ {total.toFixed(2)}</Text>

        <ConfirmButton onClick={onClose}>
          Confirmar e finalizar pedido
        </ConfirmButton>
      </Modal>
    </Overlay>
  )
}

export default ConfirmationScreen
