import {
  ModalContentContainer,
  ProductImage,
  InfoContainer,
  Title,
  Description,
  BuyButton
} from './styles'

export type ModalProductProps = {
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
}: ModalProductProps) => (
  <ModalContentContainer>
    <ProductImage src={capa} alt={titulo} />
    <InfoContainer>
      <Title>{titulo}</Title>
      <Description>
        <p>{descricao}</p>
        <br />
        <p>Serve {porcao}</p>
      </Description>
      <BuyButton onClick={onBuyClick}>
        Adicionar ao carrinho - R$ {preco.toFixed(2).replace('.', ',')}
      </BuyButton>
    </InfoContainer>
  </ModalContentContainer>
)

export default ModalProduct
