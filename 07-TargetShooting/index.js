const disparos = [0, 50, 90, 80, 100, 80, 40];

let i =0;
let pontos = 0;

for(disparo of disparos){
     if(disparo >= 70){
        pontos++;
       
        }
}
    if(pontos >= 3){
        console.log(pontos);
    }else{
        console.log("ELIMINADO");
    }