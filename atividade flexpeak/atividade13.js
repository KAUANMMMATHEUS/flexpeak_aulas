//Faça um programa que verifique se um número é um quadrado perfeito.
const numero = Number(prompt("Digite um número: "))
const raizQuadrada = Math.sqrt(numero)
if (raizQuadrada % 1 === 0) {
    console.log(`O número ${numero} é um quadrado perfeito.`)
}else {
    console.log(`O número ${numero} não é um quadrado perfeito.`)
}
