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
} */

let pets = []
const nomes = []
let quantos = Number (prompt("Você tem quantos pets?"))
pets.push(quantos)
let pet = 0


if (pets == 0) {
        alert('Que pena! Você pode adotar um pet!')
} else if (pets > 0)