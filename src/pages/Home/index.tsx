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

// Em dev usamos json-server; em prod usamos a função /api/restaurantes
const API_BASE =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)
    fetch(`${API_BASE}/restaurantes`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setRestaurantes(data))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [])

  if (carregando) return <Container>Carregando…</Container>
  if (erro) return <Container>Erro: {erro}</Container>

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
