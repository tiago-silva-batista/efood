import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Produto } from '../../types'
import { RootState } from '../../store'
import {
  abrirCarrinho,
  adicionarAoCarrinho,
  fecharCarrinho
} from '../../store/reducers/cart'

import CartSidebar from '../../components/CartSidebar'
import ProductsCard from '../../components/ProductsCard'
import HeaderPerfil from '../../components/HeaderPerfil'
import RestaurantBanner from '../../components/RestaurantBanner'
import Container from '../../components/Container'
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct'

type RestaurantType = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Produto[]
}

const Perfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [restaurante, setRestaurante] = useState<RestaurantType | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )
  const [stepCarrinho, setStepCarrinho] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation' | 'confirmationScreen'
  >('cart')

  const isCartOpen = useSelector((state: RootState) => state.cart.isOpen)
  const items = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

  useEffect(() => {
    console.log('Etapa atual:', stepCarrinho)
  }, [stepCarrinho])

  useEffect(() => {
    if (isCartOpen) {
      setStepCarrinho('cart') // Sempre reseta para 'cart' ao abrir o carrinho
    }
  }, [isCartOpen])

  const handleOpenModal = (produto: Produto) => {
    setProdutoSelecionado(produto)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  const handleAddToCart = () => {
    if (produtoSelecionado && restaurante) {
      const itemExiste = items.some((item) => item.id === produtoSelecionado.id)

      if (itemExiste) {
        toast.warning('Item já adicionado ao carrinho')
        fecharModal()
        return
      }

      dispatch(
        adicionarAoCarrinho({
          id: produtoSelecionado.id,
          nome: produtoSelecionado.nome,
          foto: produtoSelecionado.foto,
          preco: produtoSelecionado.preco,
          porcao: produtoSelecionado.porcao,
          restauranteId: restaurante.id,
          restauranteNome: restaurante.titulo
        })
      )

      dispatch(abrirCarrinho())
      fecharModal()
    }
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
            onBuyClick={handleAddToCart}
          />
        </Modal>
      )}

      <CartSidebar
        isVisible={isCartOpen}
        step={stepCarrinho}
        onChangeStep={setStepCarrinho}
        onClose={() => {
          setStepCarrinho('cart') // resetar sempre ao fechar
          dispatch(fecharCarrinho())
        }}
      />
    </>
  )
}

export default Perfil
