/* Desta maneira se tiver apenas um paremetro removemos os parêntes do argumento e o return
Como é mostrado no exemplo abaixo ⬇*/

let  somA = a => a * 2
console.log(`Maneira usada quando se tem apenas um paremetro` , somA(10))


/* Essa é a maneira mais adequada por questão de oeganização
porem não desconsidera a primeira que está a cima */




let soma2 = (a,b,c) =>{
    return a * b / c
}

console.log(`Maneira comumnete usada` , soma2(10,10,2)) 


