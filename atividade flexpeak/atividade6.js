//Escreva um programa que calcule o fatorial de um número.
const numero = Number(prompt("Digite um número: "))
let fatorial = 1
for (let i = 2; i <= numero; i++) {
    fatorial *= i
}
console.log(`O fatorial de ${numero} é ${fatorial}.`)
