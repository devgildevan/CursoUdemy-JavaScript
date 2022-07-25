/*Verifique se o número é primo, Um número primo, é um número natural,
maior que 1 e apenas divisível por si mesmo e por 1;*/

let numero = 41
let divisoes = 0

for ( let i = 1; i <= numero; i++){
    if(numero % i == 0){
        divisoes++
    } console.log(i)
}

if( divisoes == 2){
    console.log(`O número ${numero} é primo`)
} else {
    console.log(`O número ${numero} não é primo!`)
}