import { SectionContainer, List } from './styles'
import ProductCardItem from '../ProductCardItem'

type ProductType = {
  id: string
  titulo: string
  descricao: string
  capa: string
}

type Props = {
  products: ProductType[]
}

const ProductsCard = ({ products }: Props) => {
  return (
    <SectionContainer>
      <List>
        {products.map((produto) => (
          <ProductCardItem key={produto.id} {...produto} />
        ))}
      </List>
    </SectionContainer>
  )
}

export default ProductsCard
