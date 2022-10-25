// Escreva uma  função que retorne o número aleatorio 
//O número maximo retornado dever ser passado cia parametro
function retorne (num){
    return Math.floor(Math.random()* num) + 1;
}

console.log(retorne(10))
console.log(retorne(100))
console.log(retorne(50))
