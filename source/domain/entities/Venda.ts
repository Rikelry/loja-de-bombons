import { ItemVenda } from "./ItemVenda"
import { Produto } from "./Produto"

export class Venda {
  private itens: ItemVenda[] = []

  constructor(private readonly id: number) {}

  adicionarItem(produto: Produto, quantidade: number): void {
    const item = new ItemVenda(produto, quantidade)
    this.itens.push(item)
  }

  calcularTotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0
    )
  }

  getId(): number {
    return this.id
  }

  getItens(): ItemVenda[] {
    return this.itens
  }
}