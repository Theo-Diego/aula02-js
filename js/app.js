let primeiroNumero = parseInt(Math.random()*10000);
let segundoNumero = parseInt(Math.random()*500);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);

//exibindo na página - Para ISSO CRIAMOS UMA VARIÁVEL QUE RECEBE UM ELEMENTO HTML

document.getElementById('elPrimeiroNumero').textContent = `Primeiro número sorteado = ${primeiroNumero}`;

document.getElementById('elSegundoNumero').textContent = `Segundo número sorteado = ${segundoNumero}`;



document.getElementById('resultadoSoma').textContent = ` ${primeiroNumero} + ${segundoNumero} = ${resultado}`;


