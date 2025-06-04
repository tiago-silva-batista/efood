import Button from '../Button'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.png'

import {
  Card,
  ImageContainer,
  Title,
  Category,
  Description,
  Info,
  HeaderInfo,
  Rating
} from './styles'

type Props = {
  restaurante: {
    id: number
    titulo: string
    tipo: string
    destacado: boolean
    avaliacao: number
    descricao: string
    capa: string
  }
}

const RestaurantCard = ({ restaurante }: Props) => {
  return (
    <Card>
      <ImageContainer>
        <img src={restaurante.capa} alt={restaurante.titulo} />
        <Category>
          {restaurante.destacado && <Tag>Destaque da semana</Tag>}
          {restaurante.tipo && <Tag>{restaurante.tipo}</Tag>}
        </Category>
      </ImageContainer>

      <Info>
        <HeaderInfo>
          <Title>{restaurante.titulo}</Title>
          <Rating>
            <span>{restaurante.avaliacao.toFixed(1)}</span>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </HeaderInfo>

        <Description>{restaurante.descricao}</Description>
        <Button
          type="link"
          to={`/perfil/${restaurante.id}`}
          title="Clique aqui para saber mais sobre os produtos"
        >
          Saiba mais
        </Button>
      </Info>
    </Card>
  )
}

export default RestaurantCard
