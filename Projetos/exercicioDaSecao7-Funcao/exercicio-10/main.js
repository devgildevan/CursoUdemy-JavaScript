//Esvcreva uma função que recebe um número, e o decrementa de 1 em 1 comm loop

//o resultado dos números devem ser par

function numeroPar (num){
    for(let i = num; i >= 0; i--){
        if(i  %2 == 0){
            console.log(i);
        }
    }
}
numeroPar(20)