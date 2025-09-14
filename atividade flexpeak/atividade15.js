//Escreva um programa que calcule o máximo divisor comum (MDC) de dois números.
const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))
function mdc(a, b) {
    while (b !== 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}
const resultado = mdc(numero1, numero2)
console.log(`O máximo divisor comum (MDC) de ${numero1} e ${numero2} é ${resultado}.`)
