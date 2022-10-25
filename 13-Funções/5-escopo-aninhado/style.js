let a = 10

function multiplicar(x,y){
    let a = x * y
        if (a > 10){
            let a = 0
            a++
            console.log("Esse aqui é o escopo do if\nque está dentro da função" , a) 
        }
        
        console.log(`O valor da variavel dentro da funcão é ${a}`) // valor da função 
}
  
multiplicar(2,10) // valor da função

console.log(`Variavel dentro do escopo Global ${a}`)