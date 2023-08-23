let precos = [100, 500, 100, 200, 50];

let soma = 0;
let valor =100000;
for(preco of precos){
    soma+=preco;
}
if(precos.length>=5){
    for(menor of precos){
        if(menor < valor){
            valor = menor;
        }
    }
    soma-=valor;
}
console.log(soma);