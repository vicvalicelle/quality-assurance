// Faixa de Preço
// Crie um array de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre
// faixa, tooltip, minimo e maximo

function faixaPreco(tooltip, minimo, maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas = [
    faixaPreco('até R$500', 0, 500),
    faixaPreco('de R$500 a R$700', 500, 700)
]

console.log(faixas);