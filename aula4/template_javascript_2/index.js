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

//criei um objeto vazio

let usuarios = []

//criei a função onde aparece meu menu

function imprimeMenu(){
    let mensagem = ""
    mensagem += "********************************************************************" + "\n"
    mensagem += "DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:" + "\n"
    mensagem += "********************************************************************" + "\n"
    mensagem += "1- Cadastro" + "\n"
    mensagem += "2- Doadores" + "\n"
    mensagem += "3- Buscar doadores por fator RH" + "\n"
    mensagem += "4- Buscar doadores por data" + "\n"
    mensagem += "5- Sair" + "\n"
    mensagem += "*******************************************************************"
    let opcao = Number(prompt(mensagem))
    return opcao
}

//declarei as informações que vão ser solicitadas para o cadastro

let nome
let idade
let peso
let fatorRh
let data

//criei a função expecifíca para fazer o cadastro

function cadastro() {
    nome = prompt("Qual é seu nome?")
    idade = Number(prompt("Qual é a sua idade?"))
    peso = prompt("Digite seu peso?")
    fatorRh = prompt("Qual é seu tipo sanguíneo?")
    data = prompt("Quando foi sua ultima doação?")
}

//declarei mais informações, onde inclui informações para completar a lista de doadores e testar as outras funções

let nome1 = " Laura, 20, 61Kg, B-, 03/05 \n Vitória, 19, 75Kg, A+, 26/02 \n Guilherme, 21, 72Kg, O-, 30/01 \n Pedro, 18, 81Kg, AB-. 13/04"
let fatorRh1 = "B-"
let fatorRh2 = "A+"
let fatorRh3 = "O-"
let fatorRh4 = "AB-"
let data1 = "03/05"
let data2 = "26/02"
let data3 = "30/01"
let data4 = "13/04"

//inlcui todas as informações depositadas, dentro do objeto vazio

usuarios.push({nome, nome1, idade, peso, fatorRh, fatorRh1, fatorRh2, fatorRh3, fatorRh4, data, data1, data2, data3, data4})

//criei outra função, só que essa função é para mostrar a lista de doadores

let numDoadores = 1

function doadores() {
    let mensagem = ""
    mensagem += "LISTA DE DOADORES \n"
    for (let i = 0; i < numDoadores.length; i++){
        const unicoDoador = numDoadores[1]
        alert(mensagem + '\n' + `${i+1} de ${numDoadores.length} \nNome: ${unicoDoador.nome} \nIdade: ${unicoDoador.idade} \nPeso: ${unicoDoador.peso}Kg \nTipo Sanguíneo: ${unicoDoador.fatorRh} \nData da Última Doação: ${unicoDoador.data} \n ${nome1}`)
    }
}

//criei outra função, só que essa é para buscar os doadores pelo tipo sanguíneo

function buscarUm() {
    let mensagem = ""
    let tipoSanguineo
    mensagem += "LISTAGEM DOS TIPOS SANGUÍNEOS \n"
    alert(mensagem + '\n' + `${fatorRh}` + '\n' + `${fatorRh1}` + '\n' + `${fatorRh2}` + '\n' + `${fatorRh3}` + '\n' + `${fatorRh4}`)
    alert("BUSCAR TIPO SANGUÍNEO")
    tipoSanguineo = prompt()
    for (let i = 0; i < numDoadores; i++){
    switch (tipoSanguineo) {
        case "A":
            alert("Laura:"`${fatorRh2}`)
            break
        case "B":
            alert("Vitória:"`${fatorRh1}`)
            break
        case "AB":
            alert("Pedro:"`${fatorRh4}`)
            break
        case "O":
            alert(`${nome}: ${fatorRh}` + '\n' + "Guilherme:"`${fatorRh3}`)
            break
        }
    }
}

//criei outra função, só que essa é para buscar os doadores pela data de doação

function buscarDois() {
    let mensagem = ""
    mensagem += "LISTAGEM DAS DATAS DE DOAÇÕES \n"
    for (let i = 0; i < numDoadores; i++){
        alert(mensagem + '\n' + `${data3}` + '\n' + `${data2}` + '\n' + `${data}` + '\n' + `${data4}` + '\n' + `${data1}`)
        alert("Selecione um mês de 01 a 06:")
    switch (prompt()) {
        case "01":
            alert("Guilherme: " + `${data3}`)
            break
        case "02":
            alert("Vitória: " + `${data2}`)
            break
        case "03":
            alert("NENHUM USUÁRIO ENCONTRADO")
            break
        case "04":
            alert("Ádrian: " + `${data}` + '\n' + "Pedro: " + `${data4}`)
            break
        case "05":
            alert("Laura: " + `${data1}`)
            break
        case "06":
            alert("NENHUM USUÁRIO ENCONTRADO")
            break
        }
    }
}

//essa é a função main do meu code.

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

// Declarei a lista de usuários como um objeto vazio
let usuarios = []

// Criei uma função para exibir o menu
function imprimeMenu(){
    let mensagem = "********************************************************************\n"
    mensagem += "DIGITE UM DOS NUMEROS ABAIXO, CONFORME SUA ESCOLHA:\n"
    mensagem += "********************************************************************\n"
    mensagem += "1- Cadastro\n"
    mensagem += "2- Doadores\n"
    mensagem += "3- Buscar doadores por fator RH\n"
    mensagem += "4- Buscar doadores por data\n"
    mensagem += "5- Sair\n"
    mensagem += "*******************************************************************"
    // Criei uma variável e declarei ela como número, para que o usúario digite o número enquanto aparece o menu acima
    let opcao = Number(prompt(mensagem))
    return opcao
}
// Criei uma função para cadastrar os novos doadores
function cadastro() {
    let novoUsuario = {
        nome: prompt("Digite seu nome:"),
        idade: Number(prompt("Digite sua idade:")),
        peso: prompt("Digite seu peso:"),
        fatorRh: prompt("Digite seu tipo sanguíneo:"),
        data: prompt("Digite a data da sua última doação: mm/dd/aa")
    }
    // Coloquei as informações que o usuário digitou dentro do objeto usuarios, que estava vazio
    usuarios.push(novoUsuario)
}

// Criei uma função que exibe a lista de doadores
function doadores() {
    let mensagem = "LISTA DE DOADORES \n"
    // Criei um laço que vai ficar lendo as informações depositadas no objeto usuarios
    for (let i = 0; i < usuarios.length; i++){
        let doador = usuarios[i];
        mensagem += `${i+1} de ${usuarios.length} \nNome: ${doador.nome} \nIdade: ${doador.idade} \nPeso: ${doador.peso}Kg \nTipo Sanguíneo: ${doador.fatorRh} \nData da Última Doação: ${doador.data} \n\n`
    }
    // Esse alert vai mostrar a minha mensagem de titulo, junto com as informações dos usuarios cadastrados abaixo
    alert(mensagem)
}

// Criei uma função para fazer a busca dos doadores, atráves do tipo sanguineo
function buscarUm() {
    // Criei uma variavel onde o usuario vai digitar o tipo sanguineo que ele deseja buscar
    let tipoSanguineo = prompt("Digite o tipo sanguíneo que deseja buscar:")
     /* Criei outra variavel, onde coloquei o array de filter, que cria um novo array chamado encontrados que armazena
     só os objetos que estão em usuarios, que são o fatorRh que os usuarios cadastraram */
    let encontrados = usuarios.filter(doador => doador.fatorRh === tipoSanguineo)
    // Utilizei o If Else, caso o usuario busque um tipo sanguineo que conste ou não na lista
    if (encontrados.length === 0) {
        alert("Nenhum doador encontrado com esse tipo sanguíneo.")
    } else {
        let mensagem = "Doadores com o tipo sanguíneo " + tipoSanguineo + ":\n"
        /* Utilizei a variavel encontrados, onde o forEach lista somente 
        os doadores encontrados com o tipo sanguíneo especificado */
        encontrados.forEach(doador => {
            mensagem += doador.nome + "\n"
        })
        // Esse alert, vai mostrar a mensagem onde aparece somente o nome do doador, referente ao seu tipo sanguineo
        alert(mensagem)
    }
}

// Criei uma função para buscar doadores pelo mês da última doação
function buscarDois() {
    // Criei a variavel mês, onde pede o mês da ultima doação do usuario buscado.
    let mes = prompt("Selecione um mês de 01 a 12:")
    /* Criei outra variavel, onde coloquei o array de filter, que cria um novo array chamado encontrados que armazena
     só os objetos que estão em usuarios, que são a data que os usuarios cadastraram */
    let encontrados = usuarios.filter(doador => {
        let data = new Date(doador.data)
        return data.getMonth() + 1 === parseInt(mes)
    })
    // Utilizei o If Else, caso o usuario busque um mês que conste ou não na lista
    if (encontrados.length === 0) {
        alert("Nenhum doador encontrado para este mês.")
    } else {
        let mensagem = "Doadores que doaram no mês " + mes + ":\n"
        /* Utilizei a variavel encontrados, onde o forEach lista somente os doadores
        encontrados que doaram no mês especificado */
        encontrados.forEach(doador => {
            mensagem += doador.nome + " - " + doador.data + "\n"
        })
        // Esse alert, vai mostrar a mensagem onde aparece somente o nome do doador, referente a data da sua ultima doação
        alert(mensagem)
    }
}

// Criei a função principal, que a responsavel por fazer o code funcionar
function main() {
    let option = 0
    // Criei um loop que fica repetindo até que o usuário escolha a opção de sair
    while(option !== 5){
        // Mostra o menu e tambem a opção escolhida pelo usuário
        option = imprimeMenu()
        // Com base na opção escolhida, o programa vai rodar a função especifica de cada caso
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

// Criei a função principal, que faz com que o programa seja inicado
main()