import {
  ModalBody,
  ProductImage,
  ModalText,
  ProductTitle,
  ProductDescription,
  ProductServing,
  AddButton
} from './styles'

type Props = {
  capa: string
  titulo: string
  descricao: string
  porcao: string
  preco: number
  onBuyClick: () => void
}

const ModalProduct = ({
  capa,
  titulo,
  descricao,
  porcao,
  preco,
  onBuyClick
}: Props) => (
  <ModalBody>
    <ProductImage src={capa} alt={titulo} />

    <ModalText>
      <div>
        <ProductTitle>{titulo}</ProductTitle>
        <ProductDescription>{descricao}</ProductDescription>
        <ProductServing>Serve {porcao}</ProductServing>
      </div>

      <AddButton onClick={onBuyClick}>
        Adicionar ao carrinho - R$ {preco.toFixed(2).replace('.', ',')}
      </AddButton>
    </ModalText>
  </ModalBody>
)

export default ModalProduct
