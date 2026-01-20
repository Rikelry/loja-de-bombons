import { ProdutoRepositoryEmMemoria } from "./infrastructure/repositories/ProdutoRepositoryEmMemoria"
import { VendaRepositoryEmMemoria } from "./infrastructure/repositories/VendaRepositoryEmMemoria"
import { ProdutoService } from "./application/services/ProdutoService"
import { VendaService } from "./application/services/VendaService"

const produtoRepository = new ProdutoRepositoryEmMemoria()
const vendaRepository = new VendaRepositoryEmMemoria()

const produtoService = new ProdutoService(produtoRepository)
const vendaService = new VendaService(vendaRepository, produtoRepository)

produtoService.cadastrarProduto(1, "Bombom de Chocolate", 2.5)
produtoService.cadastrarProduto(2, "Bombom de Morango", 3.0)

const venda = vendaService.criarVenda(1)

const produtos = produtoService.listarProdutos()
venda.adicionarItem(produtos[0], 2)
venda.adicionarItem(produtos[1], 3)

console.log("Produtos cadastrados:", produtos)
console.log("Total da venda:", venda.calcularTotal())
console.log("Vendas realizadas:", vendaService.listarVendas())