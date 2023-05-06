let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let celular = prompt("Digite seu número de celular:")
let cidade = prompt("Digite a cidade onde você mora:")

let informacoes = {
  nome: nome,
  idade: idade,
  celular: celular,
  cidade: cidade
}

let alterar = prompt("Deseja alterar as informações? (sim ou não)")

if (alterar.toLowerCase() === "sim") {
  console.log("Informações atuais:")
  console.log(informacoes)

  nome = prompt("Digite o novo nome:")
  idade = prompt("Digite a nova idade:")
  celular = prompt("Digite o novo número de celular:")
  cidade = prompt("Digite a nova cidade onde você mora:")

  informacoes.nome = nome
  informacoes.idade = idade
  informacoes.celular = celular
  informacoes.cidade = cidade

  console.log("Informações atualizadas:")
  console.log(informacoes)
} else {
  console.log("Informações fornecidas:")
  console.log(informacoes)
}