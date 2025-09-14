//Faça um programa que ordene três números em ordem crescente.
const num1 = Number(prompt("Digite o primeiro número: "))
const num2 = Number(prompt("Digite o segundo número: "))
const num3 = Number(prompt("Digite o terceiro número: "))
let numeros = [num1, num2, num3]
numeros.sort((a, b) => a - b)
console.log(`Números em ordem crescente: ${numeros.join(", ")}`)

