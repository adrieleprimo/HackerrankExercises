let dadoCorrompido = "*Canis %lupus )familiaris";

let novaFrase;
let caracteres = /[!@#$%&*()]/g;
for (let caracter of dadoCorrompido){
    novaFrase = dadoCorrompido.replace(caracteres, "");
}  
console.log(novaFrase);