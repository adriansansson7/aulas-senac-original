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

let filme = {
    nome: 'One Piece' ,
    diretor: 'Eiichiro Oda' ,
    lançamento: '1997' ,
    elenco: 'Luffy, Zoro, Usopp, Sanji, Nami, Chopper, Robin, Franky, Brook e Jinbe' ,
    javi: 'SIM'
}
alert(filme.nome)
alert(filme['diretor'])
alert(filme.lançamento)
alert(filme['elenco'])
alert(filme.javi) */

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

let menu = prompt("DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:" + "\n" + "1- Cadastro" + "\n" + "2- Lista de doadores" + "\n" + "3- Buscar doadores por RH" + "\n" + "4- Buscar doadores por data:" + "\n" + "5- Sair")
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


nome.push(um)
idade.push(dois)
peso.push(tres)
tipoSanguineo.push(quatro)
ultimaDoação.push(cinco)