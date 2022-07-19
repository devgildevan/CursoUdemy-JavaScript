for(let i = 10; i > 0; i = i -1){
    if(i % 2 == 0){
        console.log("Caiu no continue")
        continue;
    }
    console.log(i)
}




/* Nesse outro exemplo log abaixo é fiz com os números impas */

for(let i = 10; i > 0; i = i -1){
    if(i % 2 == 1){
        console.log("Caiu no continue")
        continue;
    }
    console.log(i)
}