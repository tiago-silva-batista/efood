import Product from '../Product'
import { Produto } from '../../types'

import { SectionContainer, List } from './styles'

export type Props = {
  products: Produto[]
}

const ProductsList = ({ products }: Props) => (
  <SectionContainer>
    <List>
      {products.map((produto) => (
        <Product key={produto.id} {...produto} />
      ))}
    </List>
  </SectionContainer>
)

export default ProductsList
