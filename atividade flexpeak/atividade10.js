//Faça um programa que verifique se um número é múltiplo de 3 e 5 ao mesmo tempo.
const numero = Number(prompt("Digite um número: "))
if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`O número ${numero} é múltiplo de 3 e 5.`)
}else {
    console.log(`O número ${numero} não é múltiplo de 3 e 5.`)
}
