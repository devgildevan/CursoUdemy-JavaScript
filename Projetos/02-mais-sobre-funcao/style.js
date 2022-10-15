// function multplicarTresNumeros(x,y,z){
//     return x * y * z
// }
// console.log(multplicarTresNumeros(2,3,5))

// const mult = multplicarTresNumeros(2,3,5)

// console.log("O número é " + mult)


// function podeDirigir(idade, cnh){
//     if(idade >= 18 && cnh == true){
//         console.log("Pode dirigir")
//     }else{
//         console.log("Não pode dirigir!")
//     }
// }

// console.log(podeDirigir(10,true))
// console.log(podeDirigir(25,true))
// console.log(podeDirigir(10,0))
// console.log(podeDirigir(19,0))
// console.log(podeDirigir(19,1)) 
// console.log(podeDirigir(20,1))

/* sempre usa-se a função dentro do console para evocar ela no navegador */


function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log(`Você Pode dirigir pois você tem: ${idade}, e possue CNH`)
    }else if(idade <= 18){
        console.log(`Você não pode pois sua idade é ${idade} anos`)
    }else if(idade >= 18 && cnh == false){
        console.log(`Você tem a idade permitida porem não tem CNH`)
    }
}
console.log(podeDirigir(18,true));

// const soma = function (a,b){
//     return a + b
// }
// console.log(soma (5,10))