function verificar() {
  let n1 = Number(document.getElementById("n1").value)
  let n2 = Number(document.getElementById("n2").value)
  let n3 = Number(document.getElementById("n3").value)
  let n4 = Number(document.getElementById("n4").value)
  let n5 = Number(document.getElementById("n5").value)
  if (
    !(n1 >= 0 && n1 <= 10) ||
    !(n2 >= 0 && n2 <= 10) ||
    !(n3 >= 0 && n3 <= 10) ||
    !(n4 >= 0 && n4 <= 10) ||
    !(n5 >= 0 && n5 <= 10)
  ) {
    alert("Notas inválidas! Digite valores entre 0 e 10.")
    return
  }
  let media = (n1 + n2 + n3 + n4 + n5) / 5
  let resultado = document.getElementById("resultado")

  if (media >= 6) {
    resultado.textContent = "✅ Aprovado! Média: " + media.toFixed(2)
    resultado.style.color = "green"
  } else {
    resultado.textContent = "❌ Reprovado! Média: " + media.toFixed(2)
    resultado.style.color = "red"
  }
}
