import { ListHome, ListModal } from './styles'
import ProductCardItem from '../ProductCardItem'
import { Produto } from '../../types'

type Props = {
  products: Produto[]
  onClick?: (produto: Produto) => void
  variant?: 'home' | 'modal'
}

const ProductsCard = ({ products, variant = 'home', onClick }: Props) => {
  const ListComponent = variant === 'modal' ? ListModal : ListHome

  return (
    <ListComponent>
      {products.map((produto) => (
        <li key={produto.id}>
          <ProductCardItem
            produto={produto}
            onClick={onClick ? () => onClick(produto) : undefined}
          />
        </li>
      ))}
    </ListComponent>
  )
}

export default ProductsCard
