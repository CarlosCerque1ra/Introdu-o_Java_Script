let valor1 = parseInt(prompt("Digite um número:"))
let valor2 = parseInt(prompt("Digite outro nímero"))

// A Variavel "soma" pega valor1 e somo ao valor 2
let soma = valor1 + valor2

// Procura e coloca o Js em alguma tag do html
// Lincou o Java no arquivo HTML por meio de um Id
// Aqui ele exibe o valor da variavel Soma
document.getElementById("resultado").innerText = "Resultado " + soma
