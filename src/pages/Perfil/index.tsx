import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsCard from '../../components/ProductsCard'
import HeaderPerfil from '../../components/HeaderPerfil'
import RestaurantBanner from '../../components/RestaurantBanner'
import Container from '../../components/Container'
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct'

type ProductType = {
  id: string
  titulo: string
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: string
  porcao: string
  preco: number
  foto: string
  nome: string
}

type RestaurantType = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: ProductType[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestaurantType | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProductType | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

  const handleOpenModal = (produto: ProductType) => {
    setProdutoSelecionado(produto)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  if (!restaurante) return <p>Carregando...</p>

  return (
    <>
      <HeaderPerfil />
      <RestaurantBanner
        capa={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <Container>
        <ProductsCard
          products={restaurante.cardapio}
          variant="modal"
          onClick={handleOpenModal}
        />
      </Container>

      {modalOpen && produtoSelecionado && (
        <Modal isOpen={modalOpen} onClose={fecharModal}>
          <ModalProduct
            capa={produtoSelecionado.foto}
            titulo={produtoSelecionado.nome}
            descricao={produtoSelecionado.descricao}
            porcao={produtoSelecionado.porcao}
            preco={produtoSelecionado.preco}
            onBuyClick={() => {
              console.log('Adicionado ao carrinho:', produtoSelecionado.titulo)
              fecharModal()
            }}
          />
        </Modal>
      )}
    </>
  )
}

export default Perfil
