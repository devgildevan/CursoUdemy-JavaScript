for(let i = 10; i >= 0;  i-=1){
    if(i % 2 == 0){
        console.log(`Caiu no Continue pois o numero é par`);
        continue;

    }else if(i %2 == 1){
        console.log(`O número ${i} é impar Então irá mostrar`)
    }

    console.log(i)
}