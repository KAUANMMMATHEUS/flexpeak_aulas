//Crie um programa que calcule a raiz quadrada de um número, mas somente se o número for positivo.
const numero = Number(prompt("Digite um número: "))
if (numero >= 0) {
    const raizQuadrada = Math.sqrt(numero)
    console.log(`A raiz quadrada de ${numero} é ${raizQuadrada}.`)
}else {
    console.log("Número inválido. Digite um número positivo.")
}
