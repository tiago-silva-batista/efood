import ProductsCard from '../../components/ProductsCard'

type ProductType = {
  id: string
  titulo: string
  descricao: string
  capa: string
  tipo: string
  destaque: boolean
  avaliacao: string
  porcao: string
  preco: number
}

const produtosMock: ProductType[] = []

const Perfil = () => {
  return <ProductsCard products={produtosMock} />
}

export default Perfil
