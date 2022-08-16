//Resolução da aula guiada A015 - Laços I

//PARTE 1 - while = enquanto

//ELEMENTOS NECESSÁRIOS
/*Inicialização de variável*/
/*Condição de continuação*/
/*Uma alteração*/

/*let numero = Number(prompt ("Digite um número para somar ou 0 para sair"))
let soma = 0
while (numero!==0){
soma = soma + numero
numero = Number(prompt ("Digite um número para somar ou 0 para sair"))
}
console.log(soma);*/

//Resolução da professora

/*console.log("Pratica Guiada I");

let numero = Number(prompt("Digite um número para somar ou 0 para sair"))
let soma=0
while(numero!==0){
soma=soma+numero
console.log(soma);
console.log(numero);
numero = Number(prompt("Digite um número para somar ou 0 para sair"))
}
console.log("SOMA=",soma);*/

//PARTE 2 - for =
/*console.log("Pratica Guiada II")

const numero = +prompt("Digite um número")
for(let i=0; i<=numero;i++){
console.log(i)
}*/

//PARTE 3 - for com arrays
/*console.log("Prática Guiada III");

const listaDeNumero =[2,4,6,8,10,12,14]

for(let i=0;i<listaDeNumero.length;i++){

console.log(`O número do indice ${i} é ${listaDeNumero[i]}`);
}
console.log("FIM");*/

//EXERCÍCIO DE FIXAÇÃO
//Parte1
/*let usuario = prompt("Qual seu usuário? \n A: Administrador \n B: Usuário comum \n C: Usuário Assinante").toUpperCase()

while (usuario!=='A'){
    console.log('ACESSO NEGADO!')
    usuario = prompt("Qual seu usuário? \n A: Administrador \n B: Usuário comum \n C: Usuário Assinante").toUpperCase()    
    }
    console.log("Boas vindas ADMIN!");*/

//Parte2
/*for(let i=0; i<=10; i++){
   console.log('2x',i,'= ',i*2) 
}*/

//Parte3
const arrayString=['a', 'b', 'c', 'd']
for(let i=0; i<=arrayString.length; i++){
    console.log(arrayString[i].toUpperCase())
}