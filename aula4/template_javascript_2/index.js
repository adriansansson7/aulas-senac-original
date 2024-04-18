/* let idade = prompt("Qual é sua idade?")

let idadeBest = prompt("Qual é sua idade?")

let comparação = idade >= idadeBest

console.log("Sua idade é maior do que a do seu melhor amigo?" , (comparação))

let diferençaIdade = idade - idadeBest
console.log("A diferença de idade é de?" , (diferençaIdade))

let numeroPar = Number(prompt("Digite um número par:"))

console.log(numeroPar % 2)

// Sim, todos os número pares dividos por 2, resultam em 0.

let numeroImpar = Number(prompt("Digite um número impar:"))

console.log(numeroImpar % 2)

// Sim, quando o número é impar, sobra o resto da divisão

let idadeAnos = prompt("Qual é sua idade?")

let idadeMeses = idadeAnos * 12
alert(idadeMeses)
console.log(idadeAnos * 12)

let idadeDias = idadeAnos * 365
alert(idadeDias)
console.log(idadeAnos * 365)

let idadeHoras = idadeAnos * 8786
alert(idadeHoras)
console.log(idadeAnos * 8786) */

let num1 = Number (prompt("Digite um número:"))
let num2= Number (prompt("Digite outro número:"))
console.log(`O primeiro número é maior que o segundo? ${num1 >= num2}`)
console.log(`O primeiro numero é igual ao segundo? ${num1 >= num2}`)
let divC = (0)
let divD = (0)
let respostaC = (num1 % num2)
let respostaD = (num2 % num1)
console.log(`O primeiro numero é divisível pelo segundo? ${divC === respostaC}`)
console.log(`O segundo numero é divisível pelo primeiro? ${divD === respostaD}`)