Introdução Java Script
![image](https://github.com/user-attachments/assets/6d7e2a40-c631-4b60-b248-68629e893ff3)
Calculadora Finalizada

```HTML
HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculadora</title>
</head>
<body>
    <main>
        <div class="topo">
            <h1>CALCULADORA</h1>
            <input type="text" placeholder="Calculo e Para o cambio de moedas" id="num1">
            <input type="text" placeholder="Segundo valor" id="num2">
            <select id="converte">
                <option value="1" id="1">Real para Dólar</option>
                <option value="2" id="2">Dolar para Real</option>
            </select>
         </div>
    

    <div class="botao">
        <div class="drt">
            <button onclick="adicao()">Adição</button>
            <button onclick="subtracao()">Subtração</button>
        </div>
        <div class="esq">
            <button onclick="divisao()">Divisão</button>
            <button onclick="multiplicacao()">Multiplicação</button>
        </div>
        <p id="resultado"></p>
        <button onclick="convertido()" id="envio">Conversor</button>
        
    </div>
</main>
    
    <script src="script.js"></script>
</body>
</html>
```

```CSS
CSS

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html, body{
    width: 100vw;
    height: 100vh;
}
body{
    background: linear-gradient(#48D1CC, #008080);
    background-repeat: no-repeat;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    background-color: aliceblue;
    width: 60vh ;
    height: 55vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    border-radius: 5px;
}

.topo{
    flex-direction: column;
    display: flex;
    font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

.botao{
    display: flex;
    flex-direction: column;
    
    
}

button{
    background-color: azure;
    border-radius: 5px;
    position: relative;
    top: 20px;
    height: 30px;
    width: 120px;
    font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
    
    
}

.esq{
    top: 8px;
    position: relative;
}

#resultado{
    position: relative;
    left: 8vh;
    top: 40px;
    height: 6vh;
    width: 27vh;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #008080;
    font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

input{
    margin-bottom: 10px;
}

h1{
    font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

#envio{
    position: relative;
    left: 60px;
    top: -36px;
    background-color: #48D1CC;
}

```

```Js
Java Script
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

```
