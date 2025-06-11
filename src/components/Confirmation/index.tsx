import close from '../../assets/images/close.png'

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
  orderId: number | null
  onClose: () => void
  onConfirm: () => void
}

const Confirmation = ({ cart, address, total, onClose, onConfirm }: Props) => {
  return (
    <Overlay>
      <Modal>
        <CloseButton src={close} alt="Fechar" onClick={onClose} />

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

        <ConfirmButton onClick={onConfirm}>
          Confirmar e finalizar pedido
        </ConfirmButton>
      </Modal>
    </Overlay>
  )
}

export default Confirmation
