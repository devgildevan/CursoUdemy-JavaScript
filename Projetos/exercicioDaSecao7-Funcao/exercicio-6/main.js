//Escreva uma função que detecta o tipo de dado passado
// verifique se é um: Number,String,Boolean
//E retorne uma mensagem pra cada e execute uma função para cada caso 

function tipodeDado(dado){
    
    if(typeof dado == "String"){
        console.log(`Este dado é uma string`);
    }
    else if(typeof dado == "Boolean"){
        console.log(`Esse dado é Boolean`)
    }
    else if(typeof dado == "Number"){
        console.log(`Esse dado é Number`);
    }
}

tipodeDado(2)
tipodeDado("ola")
tipodeDado(true)