// src/components/PaymentForm/index.tsx
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
import { useFinalizeOrderMutation } from '../../services/api'

// Ligue/desligue o modo demonstração aqui (ou via env var)
const DEMO_MODE = true // ou: const DEMO_MODE = process.env.REACT_APP_DEMO === '1'

type Props = {
  onBack: () => void
  onConfirm: (orderId: number) => void
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

  const [finalizeOrder, { isLoading }] = useFinalizeOrderMutation()

  const handleOnlyLetters = (value: string) =>
    value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
  const handleOnlyNumbers = (value: string) => value.replace(/\D/g, '')

  const handleConfirm = async () => {
    // Se DEMO_MODE estiver ativo, usamos defaults quando campos estiverem vazios
    const demoNome = nome || 'Cliente Demo'
    const demoNumero = numero || '4111111111111111' // visa de teste
    const demoCvv = cvv || '123'
    const demoMes = mes || '12'
    const demoAno = ano || '30' // 2030

    // Se NÃO for demo, você pode manter validações (ou removi-las completamente)
    if (!DEMO_MODE) {
      if (!nome || !numero || !cvv || !mes || !ano) {
        alert('Preencha todos os campos do cartão.')
        return
      }
    }

    try {
      const payload = {
        items: cart.map((item) => ({
          id: item.id,
          nome: item.nome,
          preco: item.preco,
          quantidade: item.quantidade
        })),
        total,
        delivery: {
          receiver: demoNome,
          address: {
            description: address.rua || 'Rua Demo',
            city: address.cidade || 'Cidade Demo',
            zipCode: address.cep || '00000-000',
            number: Number(address.numero || '0'),
            complement: ''
          }
        },
        payment: {
          card: {
            name: demoNome,
            number: demoNumero,
            code: Number(demoCvv),
            expires: {
              month: Number(demoMes),
              year: Number(`20${demoAno}`)
            }
          }
        }
      }

      const res = await finalizeOrder(payload).unwrap()
      const orderId = Number(res.id)
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
          onChange={(e) => setNome(handleOnlyLetters(e.target.value))}
        />

        <Row>
          <Col flex={7}>
            <Label htmlFor="numero">Número do cartão</Label>
            <Input
              id="numero"
              type="text"
              maxLength={16}
              value={numero}
              onChange={(e) => setNumero(handleOnlyNumbers(e.target.value))}
            />
          </Col>

          <Col flex={3}>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(handleOnlyNumbers(e.target.value))}
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
              onChange={(e) => setMes(handleOnlyNumbers(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="ano">Ano de vencimento</Label>
            <Input
              id="ano"
              type="text"
              maxLength={2}
              value={ano}
              onChange={(e) => setAno(handleOnlyNumbers(e.target.value))}
            />
          </div>
        </Row>

        <Button onClick={handleConfirm} disabled={isLoading}>
          {isLoading ? 'Processando...' : 'Finalizar pagamento'}
        </Button>
        <Button onClick={onBack}>Voltar para a edição de endereço</Button>
      </Sidebar>
    </Container>
  )
}

export default PaymentForm
