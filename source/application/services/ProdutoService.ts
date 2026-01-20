import { Produto } from "../../domain/entities/Produto"
import { ProdutoRepository } from "../../domain/repositories/ProdutoRepository"

export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  cadastrarProduto(id: number, nome: string, preco: number): void {
    const produto = new Produto(id, nome, preco)
    this.produtoRepository.salvar(produto)
  }

  listarProdutos(): Produto[] {
    return this.produtoRepository.listar()
  }
}