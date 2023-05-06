var input = prompt("Digite uma lista de nomes separados por vírgula:")

var nomes = input.split(",")

for (var i = 0; i < nomes.length; i++) {
  nomes[i] = nomes[i].trim()
}


for (var i = 0; i < nomes.length - 1; i++) {
  for (var j = 0; j < nomes.length - i - 1; j++) {
    if (nomes[j] > nomes[j + 1]) {
      var temp = nomes[j];
      nomes[j] = nomes[j + 1]
      nomes[j + 1] = temp
    }
  }
}

console.log("Lista de nomes ordenada:")
console.log(nomes);