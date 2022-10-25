let x = 10

if(x > 5) {
    let x = 20
    x +=50
    console.log(x) // escopo IF

}
console.log(x)// escopo Global




function nomeDado(x,y,z){
    return x + y + z
}
console.log(nomeDado(10,10,10))
const novoNome = nomeDado(10,10,10)
