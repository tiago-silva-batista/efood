import { useState } from 'react'
import { SectionContainer, List } from './styles'
import ProductCardItem from '../ProductCardItem'
import Modal from '../Modal'
import ModalProduct from '../ModalProduct'

type ProductType = {
  id: string
  titulo: string
  descricao: string
  capa: string
  porcao: string
  preco: number
}

type Props = {
  products: ProductType[]
}

const ProductsCard = ({ products }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProductType | null>(null)

  const handleOpenModal = (id: string) => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const produto = data.cardapio[0] // pega o primeiro produto do restaurante
        setProdutoSelecionado({
          id: produto.id,
          titulo: produto.nome,
          descricao: produto.descricao,
          capa: produto.foto,
          porcao: produto.porcao,
          preco: produto.preco
        })
        setModalOpen(true)
      })
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  return (
    <SectionContainer>
      <List>
        {products.map((produto) => (
          <li key={produto.id}>
            <ProductCardItem
              {...produto}
              onClick={() => handleOpenModal(produto.id)}
            />
          </li>
        ))}
      </List>

      {modalOpen && produtoSelecionado && (
        <Modal isOpen={modalOpen} onClose={fecharModal}>
          <ModalProduct
            capa={produtoSelecionado.capa}
            titulo={produtoSelecionado.titulo}
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
    </SectionContainer>
  )
}

export default ProductsCard
