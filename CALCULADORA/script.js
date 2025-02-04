const adicao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "O resultado é " + soma
}

const subtracao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let sub = num1 - num2
    document.getElementById("resultado").innerText = "O resultado é " + sub
}

const divisao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let div = num1 / num2
    document.getElementById("resultado").innerText = "O resultado é " + div
}

const multiplicacao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let mul = num1 * num2
    document.getElementById("resultado").innerText = "O resultado é " + mul
}

const convertido = () => {
let resultado
let converte = document.getElementById("converte").value;
let num1 = document.getElementById("num1").value;
if(converte == '1'){
    resultado = num1 / 5.8;
}else if (converte == '2'){
    resultado = num1 * 5.8;
}
document.getElementById("resultado").innerText = resultado
}

