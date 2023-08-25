let notas = [100, 100, 100, 50];

let menor = 100000;
let maior =0;
let i =0;
let soma =0;
let total =0 ;

for(nota of notas){
    if(nota<menor){
        menor = nota;

    } 
    if(nota>maior){
        maior = nota;  
    }   
    total ++
    soma+=nota
}
console.log((soma-menor-maior)/(total-2));