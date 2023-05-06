function contarPalavras(text) {
    var palavras = text.match(/\w+/g)
    var contarP = {};
  
    palavras.forEach(function(palavras) {
      contarP[palavras] = (contarP[palavras] || 0) + 1
    });
  
    return contarP
  }
  
  var colocarTexto = prompt("Digite um texto:")
  var contarP = contarPalavras(colocarTexto)
  
  console.log(contarP)