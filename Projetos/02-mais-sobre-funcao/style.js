function multplicarTresNumeros(x,y,z){
    return x * y * z
}
console.log(multplicarTresNumeros(2,3,5))

const mult = multplicarTresNumeros(2,3,5)

console.log("O número é " + mult)


function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    }else{
        console.log("Não pode dirigir!")
    }
}

console.log(podeDirigir(10,true))
console.log(podeDirigir(25,true))
console.log(podeDirigir(10,0))
console.log(podeDirigir(19,0))
console.log(podeDirigir(19,1)) 
console.log(podeDirigir(20,1))

/* sempre usa-se a função dentro do console para evocar ela no navegador */


// function deveDirigir(idade,cnh){
//     if(idade >= 18 && cnh == true){
//         console.log("Pode dirigit")
//     } else if(idade >= 18 && cnh == false){
//         console.log(`Não pode dirigir! você tem ${idade} mas não tem CNH, então não pode dirigir`)
//     } else if(idade < 18){
//         console.log(`Você não tem idade para dirigir e nem para tirar a CNH`)
//     }
// }

// console.log(deveDirigir(20,true))
// console.log(deveDirigir(20,false))
// console.log(deveDirigir(17))


const soma = function (a,b){
    return a + b
}
console.log(soma (5,10))