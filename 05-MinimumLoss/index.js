let precos = [30, 10, 54, 76, 1, 4, 35];


let prejuizo =0;
let menorPrejuizo = 10000000;

for(let i = 0; i<precos.length;i++){
  for(let j = i+1; j<precos.length;j++){
    const valorCompra = precos[i]
   const valorVenda = precos[j]
    prejuizo = valorCompra-valorVenda;
    if(prejuizo > 0){
      if(prejuizo<menorPrejuizo){
      menorPrejuizo = prejuizo
      }
    }
  }
  
}
console.log(menorPrejuizo)



    
