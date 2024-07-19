const produto = {
    nome: "RTX 4060",
    preco: 2050,00,
    quantidade: 3
}

console.log(
    `
    Valor total do estoque de: ${produto.nome}
    => R$ ${produto.preco * produto.quantidade}
    `
)
