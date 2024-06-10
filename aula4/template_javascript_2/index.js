// Criei uma variavel global, e a declarei um objeto vazio
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

function sair() {
    alert("Tenham um ótimo dia!")
    return
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
            case 5:
                sair()
        }
    }
}

// Criei a função principal, que faz com que o programa seja inicado
main()