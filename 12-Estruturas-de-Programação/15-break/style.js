let nome = 'Gildevan'

for(let i = 0; i < 20; i++){
    console.log(`\nO nome iniciou com: ${nome}, e está no número ${i}`)


    if(i == 3){
        nome = "Érika"
        console.log(` \n Agora o nome  é ${nome} pois chegou em 3` )
    }
    if(i ==  5 && nome == "Érika"){
        console.log(`\nParar pois o número está em ${i}, e o nome é ${nome}`);
        break;
    }
    // console.log(nome,i
}






// let Velocidade = 0

// for(let i = 0; i < 100; i = i + 1){

//     if( i== 50)
//     Velocidade = 50

//     if(i == 50 && Velocidade ==  50){
//         console.log("Sua velocidade stá acima pare!")
//     break;
//     }
//     console.log(i)
// }