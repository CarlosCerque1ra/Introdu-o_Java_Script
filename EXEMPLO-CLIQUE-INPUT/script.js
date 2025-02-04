// ParseInt= Declara coum Numero inteiro
// document.getElementById pega a informação presente em um Imput com ID
// .value indica que a informação presente no imput é um Valor
 const calculo = () =>{
    let n1 = parseF(document.getElementById("n1").value);
    let n2 = parseF(document.getElementById("n2").value);
    let soma = n1 + n2
    document.getElementById("resultado").innerText = "Resultado " + soma
}
