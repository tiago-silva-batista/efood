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

type Props = {
  onBack: () => void
  onConfirm: () => void
  total: number
  cart: {
    id: number
    nome: string
    preco: number
    quantidade: number
  }[]
  address: {
    rua: string
    numero: string
    cidade: string
    cep: string
  }
}

const PaymentForm = ({ onBack, onConfirm, total }: Props) => {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [cvv, setCvv] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  const handleOnlyLetters = (value: string) =>
    value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')

  const handleOnlyNumbers = (value: string) => value.replace(/\D/g, '')

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

        <Button onClick={onConfirm}>Finalizar pagamento</Button>
        <Button onClick={onBack}>Voltar para a edição de endereço</Button>
      </Sidebar>
    </Container>
  )
}

export default PaymentForm
