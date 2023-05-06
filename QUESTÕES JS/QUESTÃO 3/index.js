var frase = prompt("Digite uma frase:")

var contador = 0

frase = frase.toLowerCase()

for (var i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
   contador++
  }
}

console.log("A letra 'a' aparece " + contador + " vez(es) na frase.")