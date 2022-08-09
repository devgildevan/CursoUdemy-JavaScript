function soma(a,b){  

  if(a === undefined || b === undefined){
        console.log("Está função precisa ter dois argumentos definidos")
    } else {
        console.log(`Agora sim temos dois argumentos `)
        return a + b
    }
}
console.log(soma(1))/* Aqui estamos mostrando a frase que está dentro do escopo if, porque só tem um argumento (1);*/
console.log(soma(1,2))/* aqui temos dois argumento o 1  e o 2, assim nossa função funcionar  que dará  o valor de três*/





/*A abaixo  segue o exemplo 2 */

// function nomeComIdade(nome,idade){
//     if(nome == undefined){
//         console.log(`Seu nome é ${nome} e sua idade está `)
//     } else {
//         console.log(`Seu nome é ${nome} e você tem ${idade + " anos"}`)
//     }
// }
// nomeComIdade(`GIldevan`)
// nomeComIdade(`Gildevan`,28)