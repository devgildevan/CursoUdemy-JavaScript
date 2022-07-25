// let idade = prompt("Qual é a sua idade?")
// if (idade >= 18){
//     alert (`Pode entrar pois ${idade} é aceitavel`)
// } else {
//     if (idade < 18){
//         alert (`Desculpas mas ${idade} não é aceitavel!`)
//     }
// }

/* ⬆ A maneira que está acima, é uma maneira usando IF com Prompt e Alert*/


let outroNumero = 20
    if(outroNumero >= 20){
        console.log(`Pode entrar pois esse ${outroNumero} é aceitável!`)
    }

let passaporte = true, nome = "gil";
if(nome == "gil" && passaporte == false ){
    console.log("Liberado")
} else {
    console.log("Proibido!")
}if((passaporte == false && nome == "gil") || passaporte == false ){
    console.log("Show pode passar")
}else{
    console.log("ERRO")
}