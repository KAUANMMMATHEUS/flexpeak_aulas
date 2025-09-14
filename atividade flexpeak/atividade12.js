//Escreva um programa que determine se uma pessoa tem acesso a um sistema com base em seu nome de usuário e senha.
const usuario = prompt("Digite seu nome de usuário: ")
const senha = prompt("Digite sua senha: ")
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido.")
}else {
    console.log("Acesso negado.")
}
