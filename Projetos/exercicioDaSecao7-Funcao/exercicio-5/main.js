//Escreva uma função que recebe a idade de uma pessoa
// se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma 
//mensagem infomando isso;

//Se ela tem menos, ela não pode, imprima outra mensagem com este aviso

//Execute a fução nos dois 


function idadeMinima (idade){
    if(idade == 18){
        console.log(`Você tem ${idade}, e já pode tirar sua CNH`);
    }else{
        console.log(`Você não tem idade suficiente`);
    }
}

idadeMinima(18);
idadeMinima(17);
idadeMinima(30);
