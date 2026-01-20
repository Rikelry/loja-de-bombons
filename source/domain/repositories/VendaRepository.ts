import { Venda } from "../entities/Venda"

export interface VendaRepository {
  salvar(venda: Venda): void
  listar(): Venda[]
}