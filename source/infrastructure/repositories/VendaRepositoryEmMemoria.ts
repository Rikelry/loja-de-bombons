import { Venda } from "../../domain/entities/Venda"
import { VendaRepository } from "../../domain/repositories/VendaRepository"

export class VendaRepositoryEmMemoria implements VendaRepository {
  private vendas: Venda[] = []

  salvar(venda: Venda): void {
    this.vendas.push(venda)
  }

  listar(): Venda[] {
    return this.vendas
  }
}