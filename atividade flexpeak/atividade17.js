//Crie um programa que determine se um número é divisível por 2 e 3 ao mesmo tempo.
const numero = Number(prompt("Digite um número: "))
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(`O número ${numero} é divisível por 2 e 3.`)
}else {
    console.log(`O número ${numero} não é divisível por 2 e 3.`)
}
