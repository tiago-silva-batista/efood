import { Card } from './styles'

type Props = {
  titulo: string
  descricao: string
  capa: string
}

const ProductCardItem = ({ titulo, descricao, capa }: Props) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button>Adicionar ao carrinho</button>
    </Card>
  )
}

export default ProductCardItem
