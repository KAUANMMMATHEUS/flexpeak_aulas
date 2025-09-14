//Faça um programa que determine se uma palavra é um palíndromo.
const palavra = prompt("Digite uma palavra: ")
const palavraInvertida = palavra.split("").reverse().join("")
if (palavra === palavraInvertida) {
    console.log(`A palavra ${palavra} é um palíndromo.`)
}else {
    console.log(`A palavra ${palavra} não é um palíndromo.`)
}
