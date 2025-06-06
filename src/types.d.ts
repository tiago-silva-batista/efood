export type Produto = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  porcao: string
  preco: number
  foto: string
  nome: string
}

export type ProdutoNoCarrinho = {
  id: string
  nome: string
  foto: string
  preco: number
  porcao: string
  restauranteId: number
  restauranteNome: string
}
