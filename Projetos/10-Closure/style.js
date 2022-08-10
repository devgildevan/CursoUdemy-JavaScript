/* Basicamente retorna uma funcão  que vai retornar outra função, e a função que está dentro da primeira ela tem o scopo 
que relembra o LET dele. */

function armazenarSoma(x){
    return y => x + y;
}

let soma1 = armazenarSoma(3);
    console.log(soma1(5));

let soma2  = armazenarSoma(5);
    console.log(soma2(10))


Function lembrarNumero = (y)