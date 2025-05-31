import { useEffect, useState } from 'react'
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

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return <ProductsCard products={products} />
}

export default HomePage
