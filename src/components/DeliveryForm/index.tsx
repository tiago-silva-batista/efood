import { useState } from 'react'
import { Container, Sidebar, Title, Label, Input, Row, Button } from './styles'

type Props = {
  onBack: () => void
  onContinue: () => void
}

const DeliveryForm = ({ onBack, onContinue }: Props) => {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const handleOnlyLetters = (value: string) =>
    value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
  const handleOnlyNumbers = (value: string) => value.replace(/\D/g, '')

  const isFormValid =
    nome.trim().length > 0 &&
    endereco.trim().length > 0 &&
    cidade.trim().length > 0 &&
    cep.trim().length === 8 &&
    numero.trim().length > 0

  return (
    <Container>
      <Sidebar>
        <Title>Entrega</Title>

        <Label htmlFor="nome">Quem irá receber</Label>
        <Input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(handleOnlyLetters(e.target.value))}
        />

        <Label htmlFor="endereco">Endereço</Label>
        <Input
          id="endereco"
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(handleOnlyLetters(e.target.value))}
        />

        <Label htmlFor="cidade">Cidade</Label>
        <Input
          id="cidade"
          type="text"
          value={cidade}
          onChange={(e) => setCidade(handleOnlyLetters(e.target.value))}
        />

        <Row>
          <div>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              type="text"
              maxLength={8}
              value={cep}
              onChange={(e) => setCep(handleOnlyNumbers(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              type="text"
              maxLength={5}
              value={numero}
              onChange={(e) => setNumero(handleOnlyNumbers(e.target.value))}
            />
          </div>
        </Row>

        <Label htmlFor="complemento">Complemento (opcional)</Label>
        <Input
          id="complemento"
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />

        <Button disabled={!isFormValid} onClick={onContinue}>
          Continuar com o pagamento
        </Button>
        <Button onClick={onBack}>Voltar para o carrinho</Button>
      </Sidebar>
    </Container>
  )
}

export default DeliveryForm
