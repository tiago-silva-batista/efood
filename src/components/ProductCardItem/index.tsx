import { Card } from './styles'

type Props = {
  id: string
  titulo: string
  descricao: string
  capa: string
  onClick: () => void
}

const ProductCardItem = ({ titulo, descricao, capa, onClick }: Props) => {
  return (
    <Card onClick={onClick}>
      <img src={capa} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button>Mais detalhes</button>
    </Card>
  )
}

export default ProductCardItem
