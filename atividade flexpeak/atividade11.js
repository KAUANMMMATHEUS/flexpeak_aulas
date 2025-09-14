//Crie um programa que calcule o preço final de um produto com base em seu preço de custo e uma porcentagem de lucro.
const precoDeCusto = Number(prompt("Digite o preço de custo do produto: "))
const porcentagemDeLucro = Number(prompt("Digite a porcentagem de lucro desejada: "))
const lucro = (precoDeCusto * porcentagemDeLucro) / 100
const precoFinal = precoDeCusto + lucro
console.log(`O preço final do produto é R$ ${precoFinal}.`)
    

