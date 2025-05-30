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
  onBuyClick: () => void
}

const ModalProduct = ({
  capa,
  titulo,
  descricao,
  onBuyClick
}: ModalProductProps) => (
  <ModalContentContainer>
    <ProductImage src={capa} alt={titulo} />
    <InfoContainer>
      <Title>{titulo}</Title>
      <Description>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
          <br />
          <br />
          Serve: de 2 a 3 pessoas
        </p>
      </Description>
      <BuyButton onClick={onBuyClick}>
        Adicionar ao carrinho - R$ 60,90
      </BuyButton>
    </InfoContainer>
  </ModalContentContainer>
)

export default ModalProduct
