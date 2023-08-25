const resultados = ["V", "E", "V", "E"];

let pontuacao = 0;

for(resultado of resultados){
    if(resultado === "V"){
        pontuacao+=3;
    } else if(resultado ==="E"){
        pontuacao++;
    }
}
console.log(pontuacao);