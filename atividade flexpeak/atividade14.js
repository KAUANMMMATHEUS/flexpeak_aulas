//Crie um programa que determine se um número é um palíndromo
const numero = prompt("Digite um número: ")
const numeroInvertido = numero.split("").reverse().join("")
if (numero === numeroInvertido) {
    console.log(`O número ${numero} é um palíndromo.`)
}else {
    console.log(`O número ${numero} não é um palíndromo.`)
}
