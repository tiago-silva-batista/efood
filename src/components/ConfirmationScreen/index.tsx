import { Sidebar, Title, Message, Button } from './styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { limpar } from '../../store/reducers/cart'

type Props = {
  onClose: () => void
  orderId: number | null
}

const ConfirmationScreen = ({ orderId, onClose }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFinish = () => {
    dispatch(limpar())
    onClose()
    navigate('/')
  }
  return (
    <Sidebar>
      <Title>Pedido realizado – {orderId ?? '...'}</Title>

      <Message>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Message>

      <Message>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Message>

      <Message>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Message>

      <Message>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Message>

      <Button onClick={handleFinish}>Concluir</Button>
    </Sidebar>
  )
}

export default ConfirmationScreen
