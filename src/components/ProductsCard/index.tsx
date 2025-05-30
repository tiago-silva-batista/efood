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
}

type Props = {
  products: ProductType[]
}

const ProductsCard = ({ products }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProductType | null>(null)

  const abrirModal = (produto: ProductType) => {
    setProdutoSelecionado(produto)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  return (
    <SectionContainer>
      <List>
        {products.map((produto) => (
          <ProductCardItem
            key={produto.id}
            {...produto}
            onClick={() => abrirModal(produto)}
          />
        ))}
      </List>

      {produtoSelecionado && (
        <Modal isOpen={modalOpen} onClose={fecharModal}>
          <ModalProduct
            capa={produtoSelecionado.capa}
            titulo={produtoSelecionado.titulo}
            descricao={produtoSelecionado.descricao}
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
