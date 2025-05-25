import marguerita from '../../assets/images/marguerita.png'
import ProductsCard from '../../components/ProductsCard'

const produtosMock = [
  {
    id: '1',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  },
  {
    id: '2',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  },
  {
    id: '3',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  },
  {
    id: '4',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  },
  {
    id: '5',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  },
  {
    id: '6',
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: marguerita,
    tipo: '',
    destaque: false,
    avaliacao: ''
  }
]

const Perfil = () => {
  return <ProductsCard products={produtosMock} />
}

export default Perfil
