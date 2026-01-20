import { Produto } from "./Produto"

export class ItemVenda {
  constructor(
    private readonly produto: Produto,
    private readonly quantidade: number
  ) {}

  calcularSubtotal(): number {
    return this.produto.getPreco() * this.quantidade
  }

  getProduto(): Produto {
    return this.produto
  }

  getQuantidade(): number {
    return this.quantidade
  }
}