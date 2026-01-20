# Sistema de Controle de Vendas – Loja de Bombons 🍫

## Apresentação

Este projeto foi desenvolvido como atividade em sala de aula para a disciplina de **Modelagem Orientada a Objetos**.  
O sistema simula o controle básico de vendas de uma pequena loja de bombons artesanais, permitindo o cadastro de produtos e o registro de vendas.

O foco da atividade é aplicar conceitos de:
- Programação Orientada a Objetos (POO)
- Clean Code
- Princípios básicos do SOLID
- Modelagem de classes (UML)

O sistema não possui cadastro de clientes nem autenticação, sendo utilizado diretamente no balcão da loja.

---

## Funcionalidades

- Cadastro de produtos (nome e preço)
- Listagem de produtos cadastrados
- Registro de vendas
- Adição de produtos em uma venda com quantidade
- Cálculo automático do total da venda

A interação com o sistema é feita por meio de `prompt`, `alert` e visualização no console do navegador.

---

## Documentação

* [Diagrama (Plant UML)](./docs/diagrama-classe-loja-bombons.puml)
* [Imagem (Plant UML)](./docs/diagrama-classe-loja-bombons.png)

---

## Como executar o projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/Rikelry/loja-de-bombons.git
```
Entre na pasta do projeto:
```
cd loja-de-bombons
```

### 2️⃣ Instalar as dependências
```
npm install
```
### 3️⃣ Executar o projeto
```
npm run start
```
### 4️⃣ Acessar no navegador

Abra o navegador e acesse:
```
http://localhost:1234
```
### 5️⃣ Visualizar o console
* Com a página aberta, pressione ```F12```
* Vá até a aba Console
* As informações do sistema serão exibidas ali durante a execução

---

Observações
* O projeto foi desenvolvido em TypeScript
* O armazenamento dos dados é feito em memória, apenas para fins didáticos
* O código está organizado em camadas (domain, application e infrastructure) para facilitar a compreensão da modelagem orientada a objetos

Autor
* @Rikelry

Atividade desenvolvida para fins acadêmicos 📚
