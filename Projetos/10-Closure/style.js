/* Basicamente retorna uma funcão  que vai retornar outra função, e a função que está dentro da primeira ela tem o scopo 
que relembra o LET dele. */

// function armazenarSoma(x){
//     return y => x + y;
// }

// let soma1 = armazenarSoma(3);
//     console.log(soma1(5));

// let soma2  = armazenarSoma(5);
//     console.log(soma2(10))


let x = 10

    while(x > 0){
        console.log(" o x é ",x);
        x = x - 5;
    }


let nome = "Gil"

    for(let i = 0; i <= 10; i++ ){
        if(i == 5)
        nome = "Pedro"
    }

    if (i == 7 && nome == "Pedro"){
        console.log(`O nome é Pedro e o valor de i é ${i}`)
    }