function comparaNumeros(num1, num2) {  
	let igual = verificaIgualdade(num1, num2)
  let resultadoSoma = soma(num1, num2)
  
  return igual + resultadoSoma
}

function verificaIgualdade(num1, num2) {
  return num1 === num2 ? `Os números ${num1} e ${num2} são iguais.` : `Os números ${num1} e ${num2} não são iguais.` 
}

function soma(num1, num2) {
  return `Sua soma é ${num1 + num2}, que é ${ num1 + num2 > 10 ? "maior" : "menor"} que 10 e ${num1 + num2 > 20 ? "maior" : "menor"} que 20`
}

console.log(comparaNumeros(20, 10))