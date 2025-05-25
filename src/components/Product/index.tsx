import Tag from '../Tag'
import Button from '../Button'

import Estrela from '../../assets/images/estrela.png'

import {
  Card,
  Description,
  Title,
  Category,
  ImageContainer,
  Score,
  OnLine,
  Star
} from './styles'

type Produto = {
  id: string
  titulo: string
  descricao: string
  capa: string
  destaque?: boolean
  tipo?: string
  avaliacao?: string
}

const Product = ({
  id,
  titulo,
  descricao,
  capa,
  destaque,
  tipo,
  avaliacao
}: Produto) => (
  <Card>
    <ImageContainer>
      <img src={capa} alt={titulo} />
    </ImageContainer>
    <Category>
      {destaque && <Tag>Destaque da semana</Tag>}
      {tipo && <Tag>{tipo}</Tag>}
    </Category>
    <OnLine>
      <Title>{titulo}</Title>
      <Score>{avaliacao}</Score>
      <Star src={Estrela} alt="estrela" />
    </OnLine>
    <Description>{descricao}</Description>
    <Button
      type="link"
      to={`/Perfil/${id}`}
      title="Clique aqui para saber mais sobre os produtos"
    >
      Saiba mais
    </Button>
  </Card>
)
export default Product
