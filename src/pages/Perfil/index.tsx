// src/pages/Perfil/index.tsx
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

const API_BASE =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api'

export default function Perfil() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const [restaurante, setRestaurante] = useState<RestaurantType | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )
  const [stepCarrinho, setStepCarrinho] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation' | 'confirmationScreen'
  >('cart')
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  const isCartOpen = useSelector((s: RootState) => s.cart.isOpen)
  const items = useSelector((s: RootState) => s.cart.items)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setErro(null)

    // json-server v1: usar query (?id=) e pegar o primeiro item
    const url = `${API_BASE}/restaurantes?id=${encodeURIComponent(id)}`
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((arr: RestaurantType[]) => {
        setRestaurante(arr?.[0] ?? null)
        if (!arr?.[0]) setErro('Restaurante não encontrado')
      })
      .catch((e) => setErro(e.message))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    if (isCartOpen) setStepCarrinho('cart')
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
    if (!produtoSelecionado || !restaurante) return
    const itemExiste = items.some((i) => i.id === produtoSelecionado.id)
    if (itemExiste) {
      toast.warning('Item já adicionado ao carrinho')
      return fecharModal()
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

  if (loading) return <Container>Carregando…</Container>
  if (erro) return <Container>Erro: {erro}</Container>
  if (!restaurante) return <Container>Restaurante não encontrado.</Container>

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
          setStepCarrinho('cart')
          dispatch(fecharCarrinho())
        }}
      />
    </>
  )
}
