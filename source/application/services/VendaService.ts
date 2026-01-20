import { Venda } from "../../domain/entities/Venda"
import { ProdutoRepository } from "../../domain/repositories/ProdutoRepository"
import { VendaRepository } from "../../domain/repositories/VendaRepository"

export class VendaService {
  constructor(
    private readonly vendaRepository: VendaRepository,
    private readonly produtoRepository: ProdutoRepository
  ) {}

  criarVenda(id: number): Venda {
    const venda = new Venda(id)
    this.vendaRepository.salvar(venda)
    return venda
  }

  listarVendas(): Venda[] {
    return this.vendaRepository.listar()
  }
}