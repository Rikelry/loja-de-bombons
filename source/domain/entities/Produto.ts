export class Produto {
  constructor(
    private readonly id: number,
    private readonly nome: string,
    private readonly preco: number
  ) {}

  getId(): number {
    return this.id
  }

  getNome(): string {
    return this.nome
  }

  getPreco(): number {
    return this.preco
  }
}