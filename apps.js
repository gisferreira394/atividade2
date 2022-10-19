function Converter(){

// 1 Pegar o valor que foi digitado no campo de id #valor
let valorEmDolar=document.getElementById("valor").value
// 2 Converter o valor de dólar para real 
let valorConvertido=valorEmDolar * 5.3
// 3 Mostrar o valor no h2 com id #valorConvertido
document.getElementById("valorConvertido").innerText= valorConvertido.toFixed(2)
}