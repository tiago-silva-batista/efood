import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import { ListHome } from '../../components/ProductsCard/styles'
import { Container } from '../../styles'

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <Container>
      <ListHome>
        {restaurantes.map((restaurante) => (
          <RestaurantCard key={restaurante.id} restaurante={restaurante} />
        ))}
      </ListHome>
    </Container>
  )
}

export default Home
