/* Armazene a velocidde de um carro em uma variável, com o número
que desejar;

Faça uma estrutura if/else que verifica se ele está acima da velocidade;

80 é a velocidade máxima permitida;

 Se estiver acima ou abaixo exiba uma mensagem com console.log();
 */

 let velocidade = 81

if(velocidade <= 80){
    console.log(`Não ultrapasse os ${velocidade} quilometros!`)
}else if( velocidade >= 80){
    console.log(`Essa velocidade ${velocidade} quilometros está acima do permitido!`)
    
}