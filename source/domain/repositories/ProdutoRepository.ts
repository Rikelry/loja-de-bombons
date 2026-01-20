import { Produto } from "../entities/Produto"

export interface ProdutoRepository {
  salvar(produto: Produto): void
  listar(): Produto[]
}