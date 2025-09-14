//Calculadora de Calorias Diárias: Crie um programa que calcule a quantidade de calorias diárias recomendadas com base na idade, sexo, peso e nível de atividade de uma pessoa.
const idade = Number(prompt("Digite sua idade: "))
const sexo = prompt("Digite seu sexo (M/F): ").toUpperCase()
const peso = Number(prompt("Digite seu peso em kg: "))
const nivelAtividade = prompt("Digite seu nível de atividade (sedentário, leve, moderado, intenso): ").toLowerCase()
let caloriasBase

if (sexo === "M") 
    caloriasBase = 88.36 + (13.4 * peso) + (4.8 * 170) - (5.7 * idade) // assumindo altura média de 170 cm
else if (sexo === "F") 
    caloriasBase = 447.6 + (9.2 * peso) + (3.1 * 160) - (4.3 * idade) // assumindo altura média de 160 cm
else {
    console.log("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.")
    caloriasBase = 0
}
let fatorAtividade

switch (nivelAtividade) {
    case "sedentário":
        fatorAtividade = 1.2
        break
    case "leve":
        fatorAtividade = 1.375
        break   
    case "moderado":
        fatorAtividade = 1.55
        break
    case "intenso":
        fatorAtividade = 1.725
        break
    default:
        console.log("Nível de atividade inválido. Use 'sedentário', 'leve', 'moderado' ou 'intenso'.")
        fatorAtividade = 1
}
const caloriasDiarias = caloriasBase * fatorAtividade
console.log(`A quantidade de calorias diárias recomendadas é: ${caloriasDiarias.toFixed(2)} kcal`)
