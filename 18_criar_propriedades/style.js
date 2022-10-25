let pessoa = {
    nome:  "Gildeva",
    idade: 28,
    profissao: "Developer"
}

let pessoa2 = {
   casada: true,
   namorada: "Érika",
   cachorro: function(){
    console.log("aqui estou na pessoa 1");
    
   }
}

Object.assign(pessoa, pessoa2);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.namorada);

pessoa.cachorro(); // devemos chamar a variavel e depois a função que está dentro do escopo da variavel 

console.log(pessoa2)
