//Escreva um programa que calcule a média de um conjunto de notas e determine se o aluno foi aprovado ou reprovado (média >= 7).
const numeroDeNotas = Number(prompt("Digite o número de notas: "))
let somaDasNotas = 0
for (let i = 1; i <= numeroDeNotas; i++) {
    const nota = Number(prompt(`Digite a nota ${i}: `))
    somaDasNotas += nota
} 
const media = somaDasNotas / numeroDeNotas
if (media >= 7) {
    console.log(`Aluno aprovado com média ${media}.`)
}else {
    console.log(`Aluno reprovado com média ${media}.`)
}
