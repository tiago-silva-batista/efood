import { useNavigate } from 'react-router-dom'
import { Container, Sidebar, Title, Label, Input, Row, Button } from './styles'

const Entrega = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Sidebar>
        <Title>Entrega</Title>

        <Label htmlFor="nome">Quem irá receber</Label>
        <Input id="nome" />

        <Label htmlFor="endereco">Endereço</Label>
        <Input id="endereco" />

        <Label htmlFor="cidade">Cidade</Label>
        <Input id="cidade" />

        <Row>
          <div>
            <Label htmlFor="cep">CEP</Label>
            <Input id="cep" />
          </div>
          <div>
            <Label htmlFor="numero">Número</Label>
            <Input id="numero" />
          </div>
        </Row>

        <Label htmlFor="complemento">Complemento (opcional)</Label>
        <Input id="complemento" />

        <Button onClick={() => navigate('/pagamento')}>
          Continuar com o pagamento
        </Button>
        <Button onClick={() => navigate(-1)} $secondary>
          Voltar para o carrinho
        </Button>
      </Sidebar>
    </Container>
  )
}

export default Entrega
