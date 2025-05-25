import ProductsList from '../../components/ProductsList'
import sushi from '../../assets/images/sushi.png'
import massas from '../../assets/images/massas.png'

const produtosMock = [
  {
    id: '1',
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: sushi,
    tipo: 'Japonesa',
    destaque: true,
    avaliacao: '4.9'
  },
  {
    id: '2',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massas,
    tipo: 'Italiana',
    destaque: false,
    avaliacao: '4.6'
  },
  {
    id: '3',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massas,
    tipo: 'Italiana',
    destaque: false,
    avaliacao: '4.6'
  },
  {
    id: '4',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massas,
    tipo: 'Italiana',
    destaque: false,
    avaliacao: '4.6'
  },
  {
    id: '5',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massas,
    tipo: 'Italiana',
    destaque: false,
    avaliacao: '4.6'
  },
  {
    id: '6',
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massas,
    tipo: 'Italiana',
    destaque: false,
    avaliacao: '4.6'
  }
]

const HomePage = () => {
  return <ProductsList products={produtosMock} />
}

export default HomePage
