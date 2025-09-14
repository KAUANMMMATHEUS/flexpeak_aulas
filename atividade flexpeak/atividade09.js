//Escreva um programa que determine se um triângulo é equilátero, isósceles ou escaleno, com base em seus lados.
const ladoA = Number(prompt("Digite o comprimento do lado A: "))
const ladoB = Number(prompt("Digite o comprimento do lado B: "))
const ladoC = Number(prompt("Digite o comprimento do lado C: "))
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é equilátero.")
}else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é isósceles.")
}else {
    console.log("O triângulo é escaleno.")
}
