/* let num1
let num2

num1 = prompt("Digite um número:")
num2 = prompt("Digite um número:")
if (num1 === num2) {
    alert(`Números iguais!`)
}

let maiorIdade = []
let idade = Number(prompt("Digite sua idade:"))
maiorIdade.push(idade)

let idadeMinima = 18
switch (maiorIdade && idadeMinima) {

    case 'maiorIdade === idadeMinima':
        console.log('Você pode dirigir!')
        break
    case 'maiorIdade || idadeMinima':
        console.log('Você pode dirigir!')
        break
    case 'maiorIdade < idadeMinima':
        console.log('Você não pode dirigir!')
        break
} 

let maiorIdade = []
let idade = Number(prompt("Digite sua idade:"))
maiorIdade.push(idade)

if (maiorIdade === '18') {
    console.log('Você pode dirigir')
} else if (maiorIdade >= '18'){
    console.log('Você pode dirigir')
} else if (maiorIdade <= '18'){
    console.log('Você não pode dirigir')
} 

let turno = prompt("Digite o turno que você estuda: Manhã, Tarde ou Noite:")

if (turno === 'Manhã') {
    console.log('Bom Dia!!')
} else if (turno === 'Tarde'){
    console.log('Boa Tarde!!')
} else if (turno === 'Noite'){
    console.log('Boa Noite!!')
}

let turno = prompt("Digite o turno que você estuda: Manhã, Tarde ou Noite:")

switch (turno) {
    case 'Manhã':
        console.log('Bom Dia!!')
        break
    case 'Tarde':
        console.log('Boa Tarde!!')
        break
    case 'Noite':
    console.log('Boa Noite!!')
    break
}

let genero = prompt("Digite o gênero do filme que deseja assistir:")
let preço = prompt("Digite o preço do ingresso:")

if (genero === 'Fantasia' && preço <= 15) {
    console.log('Bom Filme!!')
} else {
    console.log("Escolha outro filme :(")
}

let quantidadePets
quantidadePets = Number(prompt('Quantos bichinhos de estimação você tem?'))

if (quantidadePets === 0) {
    alert('Que pena! Você pode adotar um pet!');
} else {
    let i = 0
    let nomesPets = []
    for (i= 0; i < quantidadePets; i++) {
        let nomePet = prompt(`Digite o nome do ${i+1}º pet:`)
        nomesPets.push(nomePet)
    }

    console.log('Nomes dos pets:');
    for (let nome of nomesPets) {
        console.log(nome);
    }
}

let arrayOriginal
arrayOriginal = [7 , 12 , 2, 7777, 77, 777, 9]
console.log("Valores do array original:")
for (let valor of arrayOriginal) {
    console.log(valor)
}
console.log("\n" + "Valores do array original divididos por 10:")
for (let valor of arrayOriginal) {
    console.log(valor / 10)
}
let numerosPares = []
for (let valor of arrayOriginal) {
    if (valor % 2 === 0) {
        numerosPares.push(valor)
    }
}
console.log("\n" + "Números pares do array original:")
console.log(numerosPares)
let arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log("\n" + "Array de strings formatadas:")
console.log(arrayStrings)
let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0]
for (const valor of arrayOriginal) {
    if (valor > maiorNumero) {
        maiorNumero = valor
    }
}
console.log("\n" + "Maior número do array original:", + maiorNumero)
console.log("Menor número do array original:", + menorNumero)

let nome = []
let idade = []
let peso = []
let tipoSanguineo = []
let ultimaDoação = []

let um
let dois
let tres
let quatro
let cinco
let doadores = '\n' + ['1. Ana Silva' + '\n' + '2. Carlos Mendes' + '\n' + '3. Mariana Santos' + '\n' + '4. João Costa' + '\n' + '5. Isabel Oliveira']
let sair
let ImprimeMenu = prompt("DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:" + "\n" + "1- Cadastro" + "\n" + "2- Lista de doadores" + "\n" + "3- Buscar doadores por RH" + "\n" + "4- Buscar doadores por data:" + "\n" + "5- Sair")
switch (menu) {
    case '1':
        alert('Cadastro:' + '\n' + (um = prompt('Digite seu nome:')) + '\n' + (dois = prompt('Digite sua idade:')) + '\n' + (tres = prompt("Digite seu peso:")) + '\n' + (quatro = prompt("Digite seu tipo sanguíneo:")) + '\n' + (cinco = prompt("Digite a data da sua ultima doação:")))
        break
    case '2':
        alert('Lista de doadores:' + '\n' + doadores + um)
        break;
    case '3':
        alert('Buscar doadores por RH:')
        break
    case '4':
        alert('Buscar doadores por data:')
        break
    case '5':
        alert('Sair' + '\n' + prompt('Deseja mesmo sair?'))
        if (5 === 'Sim') {
            alert('Tenha um Bom Dia!')
        } else if (5 === 'Não') {
            alert(menu)
            
            
        }
}

switch (usuarios) {
    case '1':
        alert('Cadastro' + '\n' + (um = prompt('Digite seu nome:')) + '\n' + (dois = prompt('Digite sua idade:')) + '\n' + (tres = prompt("Digite seu peso:")) + '\n' + (quatro = prompt("Digite seu tipo sanguíneo:")) + '\n' + (cinco = prompt("Digite a data da sua ultima doação:")))
        break
    case '2':
        alert('Buscar doadores')
        break;
    case '3':
        alert(Sair)
        break
} 
nome.push(um)
idade.push(dois)
peso.push(tres)
tipoSanguineo.push(quatro)
ultimaDoação.push(cinco)

let usuarios = []

function imprimeMenu(){
    let mensagem = ""
    mensagem += "********************************************************************" + "\n"
    mensagem += "DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:" + "\n"
    mensagem += "********************************************************************" + "\n"
    mensagem += "1- Cadastro" + "\n"
    mensagem += "2- Buscar doadores" + "\n"
    mensagem += "3- Buscar doadores por fator RH" + "\n"
    mensagem += "4- Buscar doadores por data" + "\n"
    mensagem += "5- Sair" + "\n"
    mensagem += "*******************************************************************"
    let opcao = Number(prompt(mensagem))
    return opcao
}

let nome
let idade
let peso
let fatorRh
let data
let tudo


function cadastro() {
    nome = prompt("Qual é seu nome?")
    idade = Number(prompt("Qual é a sua idade?"))
    peso = prompt("Digite seu peso?")
    fatorRh = prompt("Qual é seu tipo sanguíneo?")
    data = prompt("Quando foi sua ultima doação?")
}

usuarios.push({nome, idade, peso, fatorRh, data,})

let numDoadores = 1

function doadores() {
    let mensagem = ``
    mensagem += `LISTA DE DOADORES: \n`
    for (let i = 0; i < numDoadores; i++){
alert(`${nome}, ${idade}, ${peso}Kg, ${fatorRh}, ${data}`)
    }
}

let tipoSangue

function buscarUm() {
    let mensagem = ``
    mensagem += `LISTAGEM DOS TIPOS SANGUÍNEOS: \n`
    for (let i = 0; i < numDoadores; i++){
        alert(`${fatorRh}`)
        prompt()
    }
}

function buscarDois() {
    let mensagem = ``
    mensagem += `LISTAGEM DAS DATAS DE DOAÇÕES: \n`
    for (let i = 0; i < numDoadores; i++){
        alert(`${data}`)
        prompt()
    }
}

function main() {
    let option = 0
    while(option !== 5){
        option = imprimeMenu()
        switch (option) {
            case 1:
                cadastro()
                break
            case 2:
                doadores()
                break
            case 3:
                buscarUm()
                break
            case 4:
                buscarDois()
                break
        }
    }
}

main()

let usuarios = []

function imprimeMenu(){
    let mensagem = ""
    mensagem += "********************************************************************" + "\n"
    mensagem += "DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:" + "\n"
    mensagem += "********************************************************************" + "\n"
    mensagem += "1- Cadastro" + "\n"
    mensagem += "2- Buscar doadores" + "\n"
    mensagem += "3- Buscar doadores por fator RH" + "\n"
    mensagem += "4- Buscar doadores por data" + "\n"
    mensagem += "5- Sair" + "\n"
    mensagem += "*******************************************************************"
    let opcao = Number(prompt(mensagem))
    return opcao
}

let nome
let idade
let peso
let fatorRh
let data


function cadastro() {
    nome = prompt("Qual é seu nome?")
    idade = Number(prompt("Qual é a sua idade?"))
    peso = prompt("Digite seu peso?")
    fatorRh = prompt("Qual é seu tipo sanguíneo?")
    data = prompt("Quando foi sua ultima doação?")
}

usuarios.push({nome, idade, peso, fatorRh, data,})

let numDoadores = 1

function doadores() {
    let mensagem = ""
    mensagem += "LISTA DE DOADORES: \n"
    for (let i = 0; i < numDoadores; i++){
alert(`${nome}, ${idade}, ${peso}Kg, ${fatorRh}, ${data}`)
    }
}

function buscarUm() {
    let mensagem = ""
    let tipoSanguineo
    mensagem += "LISTAGEM DOS TIPOS SANGUÍNEOS: \n"
    tipoSanguineo = prompt()
    for (let i = 0; i < numDoadores; i++){
        alert(mensagem + '\n' + `${fatorRh}`)
    switch (tipoSanguineo) {
        case "A":
            alert(`${fatorRh}`)
            break
        case "B":
            alert(`${fatorRh}`)
            break
        case "AB":
            alert(`${fatorRh}`)
            break
        case "O":
            alert(`${fatorRh}`)
            break
        }
    }
}

function buscarDois() {
    let mensagem = ""
    mensagem += "LISTAGEM DAS DATAS DE DOAÇÕES: \n"
    for (let i = 0; i < numDoadores; i++){
        alert(mensagem + '\n' + `${data}`)
    switch (alert("Selecione um mês de 01 a 06:") = prompt()) {
        case  "01" === `${data}`:
            alert(`${data}`)
            break
        case "02" === `${data}`:
            alert(`${data}`)
            break
        case "03" === `${data}`:
            alert(`${data}`)
            break
        case "04" === `${data}`:
            alert(`${data}`)
            break
        case "05" === `${data}`:
            alert(`${data}`)
            break
        case "06" === `${data}`:
            alert(`${data}`)
            break
        }
    }
}

function main() {
    let option = 0
    while(option !== 5){
        option = imprimeMenu()
        switch (option) {
            case 1:
                cadastro()
                break
            case 2:
                doadores()
                break
            case 3:
                buscarUm()
                break
            case 4:
                buscarDois()
                break
        }
    }
}

main() */

let carrinho = []

const fruta1 = {
    nome: "Maçã",
    disponibilidade: "True"
  }
  
  const fruta2 = {
    nome: "Pêra",
    disponibilidade: "True"
  }
  
  const fruta3 = {
    nome: "Ameixa",
    disponibilidade: "True"
  }
  
  function colocarNoCarrinho(fruta) {
    carrinho.push(fruta)
  }
  
  colocarNoCarrinho(fruta1)
  colocarNoCarrinho(fruta2)
  colocarNoCarrinho(fruta3)
  
  console.log(carrinho)