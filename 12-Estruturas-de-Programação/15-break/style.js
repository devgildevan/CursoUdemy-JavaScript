let nome = "GIl"

for(let i = 0; i < 10; i = i + 1){
    if(i == 3)
    nome = "Pedro"
    
    if(i == 5 && nome == "Pedro"){
    console.log("O nome é Pedro, pode parar!")
    break;
    }
    
    console.log(i)
}






let Velocidade = 0

for(let i = 0; i < 100; i = i + 1){

    if( i== 50)
    Velocidade = 50

    if(i == 50 && Velocidade ==  50){
        console.log("Sua velocidade stá acima pare!")
    break;
    }
    console.log(i)
}