import ProductsCard from '../ProductsCard'
import { Produto } from '../../types'

import { SectionContainer } from './styles'

export type Props = {
  products: Produto[]
}

const ProductsList = ({ products }: Props) => (
  <SectionContainer>
    <ProductsCard products={products} />
  </SectionContainer>
)

export default ProductsList
