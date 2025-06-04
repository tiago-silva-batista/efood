import { Card, Image, Title, Description, Button } from './styles'
import { Produto } from '../../types'

type Props = {
  produto: Produto
  onClick?: () => void
}

const ProductCardItem = ({ produto, onClick }: Props) => {
  return (
    <Card>
      <Image src={produto.foto} alt={produto.nome} />
      <Title>{produto.nome}</Title>
      <Description>{produto.descricao}</Description>
      <Button onClick={onClick}>Mais detalhes</Button>
    </Card>
  )
}

export default ProductCardItem
