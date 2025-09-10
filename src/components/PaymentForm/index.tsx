// PaymentForm.tsx
import { useState } from 'react'
import {
  Container,
  Sidebar,
  Title,
  Label,
  Input,
  Row,
  Button,
  Col
} from './styles'

// 🔽 importe os tipos e o hook da API
import {
  useFinalizeOrderMutation,
  type CheckoutPayload
} from '../../services/api' // ajuste o caminho se necessário

type Props = {
  onBack: () => void
  onConfirm: (orderId: number) => void // se quiser, pode mudar para string
  total: number
  address: {
    rua: string
    numero: string
    cidade: string
    cep: string
  }
  cart: {
    id: number
    nome: string
    preco: number
    quantidade: number
  }[]
}

const PaymentForm = ({ onBack, onConfirm, total, cart, address }: Props) => {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [cvv, setCvv] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  // 🔽 hook da mutation
  const [finalizeOrder, { isLoading }] = useFinalizeOrderMutation()

  const onlyLetters = (v: string) => v.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
  const onlyNumbers = (v: string) => v.replace(/\D/g, '')
  const n = (v: string, fallback = 0) => {
    const x = Number(v)
    return Number.isFinite(x) ? x : fallback
  }

  const handleConfirm = async () => {
    try {
      // 🔽 MONTA o payload com o TIPO CERTO
      const payload: CheckoutPayload = {
        products: cart.map((item) => ({
          id: item.id,
          price: item.preco,
          quantity: item.quantidade ?? 1
        })),
        delivery: {
          receiver: nome || 'Cliente Demo',
          address: {
            description: address.rua || '',
            city: address.cidade || '',
            zipCode: address.cep || '',
            number: n(address.numero, 0),
            complement: ''
          }
        },
        payment: {
          card: {
            name: nome || 'Cliente Demo',
            number: numero || '4111111111111111',
            code: n(cvv, 0),
            expires: {
              month: n(mes, 12),
              year: n(ano ? `20${ano}` : '', 2030)
            }
          }
        }
      }

      // 🔽 agora o TypeScript aceita
      const res = await finalizeOrder(payload).unwrap()

      const orderId =
        Number(res.orderId) || Math.floor(1000 + Math.random() * 9000)
      onConfirm(orderId)
    } catch (error) {
      alert('Erro ao finalizar pedido.')
      console.error(error)
    }
  }

  return (
    <Container>
      <Sidebar>
        <Title>
          Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}
        </Title>

        <Label htmlFor="nome">Nome no cartão</Label>
        <Input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(onlyLetters(e.target.value))}
        />

        <Row>
          <Col flex={7}>
            <Label htmlFor="numero">Número do cartão</Label>
            <Input
              id="numero"
              type="text"
              maxLength={16}
              value={numero}
              onChange={(e) => setNumero(onlyNumbers(e.target.value))}
            />
          </Col>
          <Col flex={3}>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(onlyNumbers(e.target.value))}
            />
          </Col>
        </Row>

        <Row>
          <div>
            <Label htmlFor="mes">Mês de vencimento</Label>
            <Input
              id="mes"
              type="text"
              maxLength={2}
              value={mes}
              onChange={(e) => setMes(onlyNumbers(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="ano">Ano de vencimento</Label>
            <Input
              id="ano"
              type="text"
              maxLength={2}
              value={ano}
              onChange={(e) => setAno(onlyNumbers(e.target.value))}
            />
          </div>
        </Row>

        <Button onClick={handleConfirm} disabled={isLoading}>
          Finalizar pagamento
        </Button>
        <Button onClick={onBack}>Voltar para a edição de endereço</Button>
      </Sidebar>
    </Container>
  )
}

export default PaymentForm
