import {
  Image,
  Title,
  Type,
  InfoWrapper,
  BannerWrapper,
  InfoContent
} from './styles'
import Container from '../Container'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const RestaurantBanner = ({ capa, titulo, tipo }: Props) => {
  return (
    <BannerWrapper>
      <Image src={capa} alt={titulo} />
      <InfoWrapper>
        <Container>
          <InfoContent>
            <Type>{tipo}</Type>
            <Title>{titulo}</Title>
          </InfoContent>
        </Container>
      </InfoWrapper>
    </BannerWrapper>
  )
}

export default RestaurantBanner
