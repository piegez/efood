declare type Rest = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

declare interface Menu {
  categoria: string
  nota: string
  itens: Menu[]
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
