
const numerosLista = prompt("Digite uma lista de números separados por vírgula:")
const numerosListaArray = numerosLista.split(",").map(numero => parseFloat(numero))

function encontrarSegundoMaior(lista) {
    if (lista.length < 2) {
    return "A lista nessecita ter pelo menos dois números."
  }

  lista.sort(function(a, b) {
    return b - a;
  });

  return lista[1]
}

const segundoMaior = encontrarSegundoMaior(numerosListaArray)
console.log("O segundo maior número é: " + segundoMaior)