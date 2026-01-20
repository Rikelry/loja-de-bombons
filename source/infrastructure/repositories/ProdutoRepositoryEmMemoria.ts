import { Produto } from "../../domain/entities/Produto"
import { ProdutoRepository } from "../../domain/repositories/ProdutoRepository"

export class ProdutoRepositoryEmMemoria implements ProdutoRepository {
  private produtos: Produto[] = []

  salvar(produto: Produto): void {
    this.produtos.push(produto)
  }

  listar(): Produto[] {
    return this.produtos
  }
}